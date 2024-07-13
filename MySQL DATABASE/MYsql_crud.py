import mysql.connector as connector
class DBHelper:
    def __init__(self): 
        self.con= connector.connect(
            host='localhost',
            port='3306',
            user='root',
            password='Ind12345678@',
            database='indradata'
        )
        query ='create table if not exists indradata(userid int primary key, userName varchar(200), phone varchar(12))'
        cur = self.con.curser()
        cur.execute(query)
        print("created")

crd=DBHelper()



