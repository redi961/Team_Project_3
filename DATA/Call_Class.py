import pymysql
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sqlalchemy import create_engine
from collections import Counter

## Import_TF
import tensorflow as tf
from tensorflow import keras
from sklearn.preprocessing import MinMaxScaler
from tensorflow.python.keras.models import load_model

## Class import
from Class_ZIP import Module_1
from Class_ZIP import Module_2

# 모델 제작 코드(실행만 하면 자동 제작)

class CREATE_MODEL:
  global df_1, df_2
  df_1, df_2 = Module_2.CallMo_1('127.0.0.1', 'test', 'test1234', 'test_22')
  def CREATE_80():
    ## 80번대
    df_3 = Module_2.CModel_1(df_1)
    pred_1, model_1 = Module_2.Model_create(df_3[0], df_3[1], df_3[2], df_3[3])
    model_1.save('Last80.h5')


  def CREATE_70():
    # 70번대
    df_3 = Module_2.CModel_1(df_2)
    pred_2, model_2 = Module_2.Model_create(df_3[0], df_3[1], df_3[2], df_3[3])
    model_2.save('Last70.h5')

A = CREATE_MODEL.CREATE_80()
B = CREATE_MODEL.CREATE_70()

A
B

# ## 모델 사용 코드
# MMSI = '273436790'
# class Using_Module:
#   global df_1
#   df_1 = Module_2.CallMo_2('127.0.0.1', 'test', 'test1234', 'test', MMSI)
#   df_1 = df_1.reshape(-1, 1, 9)
  
#   def USE_80():
#     # df_3 = Module_2.CModel_2(df_1)
#     model = tf.keras.models.load_model('Last80.h5')

#     # 예측값 저장을 위한 배열
#     ans = []
#     pred = model.predict(df_1)
#     ans.append(pred)

#     # 출력을 위한 형변환
#     k = np.array(ans)
#     k = k.reshape(-1, 4)
#     Dt = Module_1.Return(k)
#     Module_1.Ship_SET(Dt, '127.0.0.1', 'test', 'test1234', 'test')


#   def USE_70():
#     # df_3 = Module_2.CModel_2(df_1)
#     model = tf.keras.models.load_model('Last70.h5')

#     # 예측값 저장을 위한 배열
#     ans = []
#     pred = model.predict(df_1)
#     ans.append(pred)

#     # 출력을 위한 형변환
#     k = np.array(ans)
#     k = k.reshape(-1, 4)
#     # Dt = Module_1.Return(k, MMSI)

#     return k


# KK = Using_Module.USE_70()

# print(KK)

# conn = pymysql.connect(host= '127.0.0.1', user= 'test',
#                     password='test1234', db='test', charset='utf8')
# cur = conn.cursor()
# cur.execute('select shiptype from ship where mmsi ='+ MMSI)
# A = cur.fetchall()
# if A[0][0] == 70:
#   Using_Module.USE_70()
# else:
#   Using_Module.USE_80()
