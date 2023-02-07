## Import_list
import pymysql
import urllib.request
import time
import pandas as pd
import requests, xmltodict, json
import datetime
from urllib.request import urlopen
from pandas.io.json import json_normalize
from urllib.parse import urlencode, quote_plus, unquote
from bs4 import BeautifulSoup
from sqlalchemy import create_engine

## 학습용 과거 데이터 CSV를 DB에 넣는 코드
class Weather:

  def Past_weather():
    df = pd.read_csv('Weather.csv', encoding='utf8')
    # Unnamed: 0 = 여러 csv를 결합하면서 나타나는 열명
    df = df.drop(['Unnamed: 0', 'No', '관측소명', '유의파주기', 
                  '파향', '파향16방위', '유향16방위', '수온(°C)', 
                  '기온(°C)', '기압(hPa)', '풍향16방위'], axis=1)

    # null 존재 유무 판단
    df.isnull().sum()
    df = df.dropna(axis=0)
    df = df.reset_index()    # 인덱스 새로 설정
    df = df.drop(['index'], axis=1)

    for i in range(len(df['유속(Kn & cm/s)'])):
        df['유속(Kn & cm/s)'][i] = '0' + df['유속(Kn & cm/s)'][i][:3]

    df.columns = ['Time', 'Flow_rate', 'Flow_current', 'Wind_vel', 'Wind_dir', 'Wave']
    df['Flow_rate'].unique()

    df.drop(df[df['Flow_rate'] == '00 &'].index, inplace=True)

    db_connection_str = 'mysql+pymysql://test:test1234@127.0.0.1/test'
    db_connection = create_engine(db_connection_str)
    df.to_sql(name='weather', con=db_connection, if_exists='append',index=False)


  ## 실시간 데이터 DB에 넣는 코드

  def Ocean():
    # 인증키
    apikey = "rk9ecsQZijNbFfK0yYofwg=="
    # 관측소 번호
    code = "TW_0062"
    url = f"http://www.khoa.go.kr/api/oceangrid/buObsRecent/search.do?"\
          f'ServiceKey={apikey}'\
          f'&ObsCode={code}&ResultType=json'

    # 지정 URL에 get 요청 보냄
    re = requests.get(url)
    # JSON 변환
    a = re.json()
    a1 = a['result']

    a1 = pd.DataFrame(a1)
    # 'meta' 열 삭제
    a1 = a1.drop(['meta'], axis=1)
    # 결측값이 있는 행 제거
    a1 = a1.dropna()
    # 행과열 바꾸기
    a1 = a1.transpose()
    # 선택한 열 삭제   시간 - 'record_time'
    a1 = a1.drop(['water_temp','Salinity','air_temp','air_pres'], axis=1)
    # 열 명 바꾸기
    a1.columns = ['Time','Flow_rate','Flow_current','Wind_vel','Wind_dir','Wave']
    # index 초기값 설정 (0)
    a1 = a1.reset_index(drop=True)
    # 데이터타입 변경
    a1['Time'] = pd.to_datetime(a1['Time'])
    a1 = a1.astype({'Flow_rate':'float','Flow_current':'float',
                    'Wind_vel':'float','Wind_dir':'float','Wave':'float'})
    #a1= a1.style.hide_index()
    return a1

  # DB 연동
  def Call_weather(Host, User, Pass, DB):
    conn=pymysql.connect(host=Host, user=User,
                        password=Pass, db=DB, charset='utf8')
    cur = conn.cursor()
    # 테이블 생성
    sql = "CREATE TABLE weather (Real_time DATETIME DEFAULT CURRENT_TIMESTAMP, \
          Time DATETIME, Flow_rate float, Flow_current float, Wind_vel float, Wind_dir float, Wave float)"
    cur.execute(sql)
    conn.close()

    db_connection_str = 'mysql+pymysql://'+User+':'+Pass+'@'+Host+'/'+DB
    db_connection = create_engine(db_connection_str)

    return db_connection

    
  # Input
  def Input_data(db_connection):
    while True:
      data = Weather.Ocean()
      # db저장
      data.to_sql(name='weather', con=db_connection, if_exists='append',index=False) 
      time.sleep(60)
