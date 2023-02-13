## Import List
### Import_Python
import pymysql
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sqlalchemy import create_engine
from collections import Counter
from sklearn.metrics import mean_squared_error
from keras.callbacks import EarlyStopping

### Import_TF
import tensorflow as tf
from tensorflow import keras
from sklearn.preprocessing import MinMaxScaler
from tensorflow.python.keras.models import load_model

###################################################################################
## DATA호출 및 정규화 클래스

class Module_1:
    global scaler_3
    scaler_3 = MinMaxScaler()
    # DB에서 선박데이터 호출(과거 : model제작 / 미래 : 예측용도)
    def Ship_DATA(Name, User, Pass, DB):
        ## DB 연결
        conn = pymysql.connect(host= Name, user= User,
                            password=Pass, db=DB, charset='utf8')

        cur = conn.cursor()
        cur.execute('select * from ais')
        A = cur.fetchall()
        cur.execute('select * from ship')
        B = cur.fetchall()
        
        ## DF
        df_1_1 = pd.DataFrame(A)
        df_1_1.columns = ['Date', 'Cog', 'Longitude', 'Latitude', 'Kn', 'MMSI']

        df_1_2 = pd.DataFrame(B)
        df_1_2.columns = ['MMSI', 'ShipName', 'Type']

        # 소수점 제한 : 파이썬에서 표기와 DB에서의 표기가 소수점 제한이 다름
        df_1_3 = pd.merge(df_1_1, df_1_2)
        df_1_3['Cog'] = round(df_1_3['Cog'], 5)
        df_1_3['Kn'] = round(df_1_3['Kn'], 2)
        df_1_3 = df_1_3[df_1_3['Kn'] != 0.0]

        # 기상데이터와 연결하기 위한 열 생성
        df_1_3['real_time'] = df_1_3['Date'].dt.strftime('%Y-%m-%d %H:%M')

        df_1 = df_1_3[df_1_3['Type'] == 80]     # 80번 선박
        df_2 = df_1_3[df_1_3['Type'] == 70]     # 70번 선박

        item_1 = Counter(df_1['ShipName'])    # 80번 선박명 반복수 체크
        item_2 = Counter(df_2['ShipName'])    # 70번 선박명 반복수 체크
        
        # 제일 많은 선박을 추출
        # 80번 선박
        ship_1_1 = item_1.most_common(n=10)[1][0]
        ship_1_2 = item_1.most_common(n=10)[2][0]
        ship_1_3 = item_1.most_common(n=10)[3][0]
        ship_1_4 = item_1.most_common(n=10)[4][0]
        
        # 70번 선박
        ship_2_0 = item_2.most_common(n=10)[0][0]
        ship_2_1 = item_2.most_common(n=10)[1][0]
        ship_2_3 = item_2.most_common(n=10)[3][0]
        ship_2_4 = item_2.most_common(n=10)[4][0]
    
        df_1_7_1 = df_1[df_1['ShipName']==ship_1_1]
        df_1_7_2 = df_1[df_1['ShipName']==ship_1_2]
        df_1_7_3 = df_1[df_1['ShipName']==ship_1_3]
        df_1_7_4 = df_1[df_1['ShipName']==ship_1_4]

        df_1_8_0 = df_2[df_2['ShipName']==ship_2_0]
        df_1_8_1 = df_2[df_2['ShipName']==ship_2_1]
        df_1_8_3 = df_2[df_2['ShipName']==ship_2_3]
        df_1_8_4 = df_2[df_2['ShipName']==ship_2_4]

        # df_1 = pd.concat([df_1_7_1], axis=0)
        # df_2 = pd.concat([df_1_8_0], axis=0) 

        df_1 = pd.concat([df_1_7_1, df_1_7_2, df_1_7_3, df_1_7_4], axis=0)
        df_2 = pd.concat([df_1_8_0, df_1_8_1, df_1_8_3, df_1_8_4], axis=0)  
        
        
        return df_1, df_2

    def Ship_Predict(Host, User, Pass, DB, MMSI):
        ## DB 연결
        conn = pymysql.connect(host= Host, user= User,
            password=Pass, db=DB, charset='utf8')

        cur = conn.cursor()
        # Table call
        cur.execute('select * from ais where MMSI='+MMSI)
        A = cur.fetchall()
        cur.execute('select * from ship')
        B = cur.fetchall()
        cur.execute('select * from predictedais where MMSI='+MMSI)
        C = cur.fetchall()


        ## DF
        df_1_1 = pd.DataFrame(A)
        df_1_2 = pd.DataFrame(B)
        df_2_1 = pd.DataFrame(C)        

        if len(df_2_1) != 0:
            df_2_1 = df_2_1.drop([0], axis=1)
            # 열 순서 변경
            df_2_1 = df_2_1.reindex(columns=[5, 1, 3, 4, 6, 2])
            df_1_1.columns = ['Date', 'Cog', 'Longitude', 'Latitude', 'Kn', 'MMSI']
            df_2_1.columns = ['Date', 'Cog', 'Longitude', 'Latitude', 'Kn', 'MMSI']
            df_1_1 = df_1_1.append(df_2_1)
            df_1_1 = df_1_1.reset_index()
            df_1_1 = df_1_1.drop(['index'], axis=1)

            df_1_2.columns = ['MMSI', 'ShipName', 'Type']

            # 소수점 제한 : 파이썬에서 표기와 DB에서의 표기가 소수점 제한이 다름
            df_1 = pd.merge(df_1_1, df_1_2)
            df_1['Cog'] = round(df_1['Cog'], 5)
            df_1['Kn'] = round(df_1['Kn'], 2)

            # 기상데이터와 연결하기 위한 열 생성 - last
            df_1['real_time'] = df_1['Date'].dt.strftime('%Y-%m-%d %H:%M')
            return df_1

        else:
            df_1_1.columns = ['Date', 'Cog', 'Longitude', 'Latitude', 'Kn', 'MMSI']
            df_1_2.columns = ['MMSI', 'ShipName', 'Type']
            
            df_1 = pd.merge(df_1_1, df_1_2)
            df_1['Cog'] = round(df_1['Cog'], 5)
            df_1['Kn'] = round(df_1['Kn'], 2)

            # 기상데이터와 연결하기 위한 열 생성 - last
            df_1['real_time'] = df_1['Date'].dt.strftime('%Y-%m-%d %H:%M')

            return df_1

    # 기상데이터 DB에서 호출
    def Weather_Data_1(Host, User, Pass, DB):

        # DB 연결
        conn = pymysql.connect(host= Host, user= User,
                  password=Pass, db=DB, charset='utf8')
        cur = conn.cursor()
        cur.execute('select * from oceanweather')
        A = cur.fetchall()

        # DF제작
        df_1_1 = pd.DataFrame(A)   
        # 제작 후 호출 시 컬럼명이 없으므로 제작 
        df_1_1.columns = ['weatherId', 'current_dir', 'current_speed', 
                        'real_time', 'wave_height', 'wind_dir', 'wind_speed']

        # # Data 전처리
        df_1_1 = df_1_1.drop(['weatherId'], axis=1)
        df_1_1 = df_1_1.astype({'real_time':'object'})
        df_1_1['real_time'] = pd.to_datetime(df_1_1['real_time'])
        df_1_1['real_time'] = df_1_1['real_time'].dt.strftime('%Y-%m-%d %H:%M')

        # null 존재 유무 판단
        df_1_1.isnull().sum()
        df_1_1 = df_1_1.dropna(axis=0)
        df_1_1 = df_1_1.reset_index()    # 인덱스 새로 설정
        df_1 = df_1_1.drop(['index'], axis=1)
        
        return df_1

    def Weather_Data_2(Host, User, Pass, DB):

        # DB 연결
        conn = pymysql.connect(host= Host, user= User,
                  password=Pass, db=DB, charset='utf8')
        cur = conn.cursor()
        cur.execute('select * from oceanweather')
        A = cur.fetchall()

        # DF제작
        df_1_1 = pd.DataFrame(A)   
        # 제작 후 호출 시 컬럼명이 없으므로 제작 
        df_1_1.columns = ['weatherId', 'current_dir', 'current_speed', 'real_time',
                        'record_time', 'wave_height', 'wind_dir', 'wind_speed']

        # # Data 전처리
        df_1_1 = df_1_1.drop(['weatherId', 'record_time'], axis=1)
        df_1_1 = df_1_1.astype({'real_time':'object'})
        df_1_1['real_time'] = pd.to_datetime(df_1_1['real_time'])
        df_1_1['real_time'] = df_1_1['real_time'].dt.strftime('%Y-%m-%d %H:%M')

        # null 존재 유무 판단
        df_1_1.isnull().sum()
        df_1_1 = df_1_1.dropna(axis=0)
        df_1_1 = df_1_1.reset_index()    # 인덱스 새로 설정
        df_1 = df_1_1.drop(['index'], axis=1)
        
        return df_1
    
    def Normalize_1(df_3, df_4):
        # df_5 : 학습용 최종 DataFrame
        df_5 = pd.merge(df_3, df_4)
        df_5 = df_5.drop(['real_time'], axis=1)
        df_5.drop(df_5[df_5['current_speed'] == '00 &'].index, inplace=True)
        df_5 = df_5.reset_index()
        df_5 = df_5.drop(['index'], axis=1)

        # MinMaxScaler() : 정규화
        # global scaler_1
        scaler_1 = MinMaxScaler()        
        scaler_2 = MinMaxScaler()
        scale_cols_1 = ['Cog', 'Longitude', 'Latitude', 'Kn']   # 선박 스케일링
        scale_cols_2 = ['current_speed', 'current_dir', 'wind_speed', 'wind_dir', 'wave_height']   # 기상 스케일링

        # fit_transform() : train data에만 적용하며, 학습하고 평균과 분산에 맞춰서 변형
        scale_df_1 = scaler_1.fit_transform(df_5[scale_cols_1])
        scale_df_2 = scaler_2.fit_transform(df_5[scale_cols_2])
                
        # 정규화된 새로운 DF생성
        scale_df_1 = pd.DataFrame(scale_df_1, columns=scale_cols_1)   # 선박 정규화
        scale_df_2 = pd.DataFrame(scale_df_2, columns=scale_cols_2)   # 기상 정규화 
        
        # 학습을 위해 두 프레임 병합
        scale_df_3 = pd.concat([scale_df_1, scale_df_2], axis=1)

        quest_col = ['Cog', 'Longitude', 'Latitude', 'Kn',
                    'current_speed', 'current_dir', 'wind_speed', 'wind_dir', 'wave_height']  # 예측을 위해 필요한 열명   
        
        ans_col = ['Longitude', 'Latitude', 'Cog', 'Kn']  # 예측하고자 하는 열명

        feat_df = pd.DataFrame(scale_df_3, columns=quest_col) # 예측하기 위한 DataFrame
        label_df = pd.DataFrame(scale_df_3, columns=ans_col)  # 예측결과값 DataFrame

        # 값을 numpy로 전환
        feat_np = feat_df.to_numpy()
        label_np = label_df.to_numpy()

        return feat_np, label_np

    def Normalize_2(df_3, df_4):
        # df_5 : 학습용 최종 DataFrame
        df_5 = pd.merge(df_3, df_4)
        df_5 = df_5.drop(['real_time'], axis=1)
        df_5.drop(df_5[df_5['current_speed'] == '00 &'].index, inplace=True)
        df_5 = df_5.reset_index()
        df_5 = df_5.drop(['index'], axis=1)

        # MinMaxScaler() : 정규화         
        scaler_4 = MinMaxScaler()
        scale_cols_1 = ['Cog', 'Longitude', 'Latitude', 'Kn']   # 선박 스케일링
        scale_cols_2 = ['current_speed', 'current_dir', 'wind_speed', 'wind_dir', 'wave_height']   # 기상 스케일링

        # fit_transform() : train data에만 적용하며, 학습하고 평균과 분산에 맞춰서 변형
        scale_df_1 = scaler_3.fit_transform(df_5[scale_cols_1])
        scale_df_2 = scaler_4.fit_transform(df_5[scale_cols_2])
        
        # 정규화된 새로운 DF생성
        scale_df_1 = pd.DataFrame(scale_df_1, columns=scale_cols_1)
        scale_df_2 = pd.DataFrame(scale_df_2, columns=scale_cols_2)
        
        # 학습을 위해 두 프레임 병합
        scale_df_7 = pd.concat([scale_df_1, scale_df_2], axis=1)
        quest_col = ['Cog', 'Longitude', 'Latitude', 'Kn',
                    'current_speed', 'current_dir', 'wind_speed', 'wind_dir', 'wave_height']  # 예측을 위해 필요한 열명   
        
        feat_df = pd.DataFrame(scale_df_7, columns=quest_col) # 예측하기 위한 DataFrame

        # 값을 numpy로 전환
        feat_np = feat_df.to_numpy()

        return feat_np

    ## 최종 예측결과를 DataFrame으로 전환
    def Return(data_np, MMSI):
        # Ans = scaler_1.fit(data_np)
        Ans = scaler_3.inverse_transform(data_np)
        df = pd.DataFrame(Ans)
        df.columns = ['cog', 'posX', 'posY', 'sog']
        df['mmsi'] = MMSI

        return df

    def Ship_SET(df, Host, User, Pass, DB):
        db_connection_str = 'mysql+pymysql://'+User+':'+Pass+'@'+Host+'/'+DB
        db_connection = create_engine(db_connection_str)
        conn = db_connection.connect()

        df[len(df)-1:].to_sql(name='predictedais', con=db_connection, if_exists='append',index=False)
        conn.commit()
        conn.close()



## 모델 제작 클래스_2 : class_1 + train-test, learning, model_create  
class Module_2:
    ## 앞의 class_1에서 나온 총 결과값 호출
    def CallMo_1(Host, User, Pass, DB):
        df_1, df_2 = Module_1.Ship_DATA(Host, User, Pass, DB)
        df_3 = Module_1.Weather_Data_1(Host, User, Pass, DB)
        df_5 = Module_1.Normalize_1(df_1, df_3)
        df_6 = Module_1.Normalize_1(df_2, df_3)

        return df_5, df_6

    def CallMo_2(Host, User, Pass, DB, MMSI):
        df_1 = Module_1.Ship_Predict(Host, User, Pass, DB, MMSI)
        df_3 = Module_1.Weather_Data_2(Host, User, Pass, DB)
        df_5 = Module_1.Normalize_2(df_1, df_3)

        return df_5


    ## Train data, Test data로 분류
    def Data_set(feature, label, window_size):
        # 입력데이터와 정답데이터를 저장할 빈 리스트
        feature_list=[]
        label_list=[]

        # feature - window_size : 들어온 데이터의 길이중 첫번째는 window-size로 사용되어 제외
        for i in range(len(feature) - window_size):
            # 슬라이싱 [[0~window_size에 해당하는 데이터까지], [1~window_size+1에 해당하는 데이터까지]]
            feature_list.append(feature[i:i+window_size])
            label_list.append(label[i+window_size])

        # np.array형식으로 리턴하여 (batch_size, time step, input dims)로 반환
        return np.array(feature_list), np.array(label_list)
    

    ## MODEL 구축함수
    def Model_create(x_train, y_train, x_test, y_test):
        ## model 구축
        model = tf.keras.Sequential([
            tf.keras.layers.LSTM(256, activation='tanh', input_shape = x_train[0].shape, return_sequences= True),
            tf.keras.layers.Dense(100, activation = 'linear'),
            tf.keras.layers.Dense(100, activation = 'linear'),
            tf.keras.layers.Dropout(0.05),
            tf.keras.layers.LSTM(128, activation='tanh', return_sequences= True),
            tf.keras.layers.Dense(100, activation = 'linear'),
            tf.keras.layers.Dense(100, activation = 'linear'),
            tf.keras.layers.LSTM(128, activation='tanh', return_sequences= False), 
            tf.keras.layers.Dense(4, activation='linear')
        ])

        ## compile & learning        
        # mae : 오차 절댓값
        model.compile(loss='mse', optimizer = 'adam', metrics=['mae'])
        ea_stop = EarlyStopping(monitor='val_loss', patience=30)
        model.fit(x_train, y_train, validation_data=(x_test, y_test), epochs=1000,
                        batch_size=100, callbacks=[ea_stop])

        ## 예측 및 평가
        pred = model.predict(x_test)
        metrics = model.evaluate(x_test, y_test, batch_size=16)
        mse = mean_squared_error(y_test, pred)
        rmse = np.sqrt(mean_squared_error(y_test, pred))
        print('##### Test Result #####')
        print(Module_2.MSE(y_test, pred),mse)
        print(Module_2.RMSE(y_test, pred),rmse)

        return pred, model
  
    def MSE(y, pred):
        return np.mean(np.square(y-pred))
    
    def RMSE(y, pred):
        return np.sqrt(np.mean(np.square(y-pred)))

    def CModel_1(df_5):
        window_size = 1
        # train, test data
        X_1, Y_2 = Module_2.Data_set(df_5[0], df_5[1], window_size)

        # train data, test data 분리
        split = -500

        x_train = X_1[0:split]
        y_train = Y_2[0:split]

        x_test = X_1[split:]
        y_test = Y_2[split:]

        return x_train, y_train, x_test, y_test
