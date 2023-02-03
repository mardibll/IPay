import {openDatabase} from 'react-native-sqlite-storage';
var data = openDatabase({nama: 'MydataUser'});
export const sqlite = openDatabase({
    name: 'NATIVE_DB',
  });
  export const createTable = (tableNames, value) => {
    console.log('jdhwehi123', value);
    const z = Object.entries(value)
      .map(x => x.join(' '))
      .join(', ');
    db.transaction(txn => {
      // JIKA INGIN MENGHAPUS NAMA TABLE YANG SAMA DAN SEMUA DATA DIDALAMNYA AKAN TERHAPUS MAKA UNCOMMET INI
      // txn.executeSql(`DROP TABLE IF EXISTS ${tableNames}`, []);
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS ${tableNames} (${z})`,
        [],
        (sqlTxn, res) => {
          console.log(`Table "${res}" created successfully`);
        },
        err => console.log(`Table "${table}" creating error => ` + err.message),
      );
    });
  };
  export const getListTable = () => {
    data.transaction(tx => {
      tx.executeSql(
        'SHOW TABLES',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          console.log('TABLE LIST ', temp);
        },
        err => console.log(`TABLE LIST  => ` + err.message),
      );
    });
  };
  export const GET = (table, orderBy) => {
    return new Promise((resolve, reject) => {
      var query = `SELECT * FROM ${table}`;
      if (orderBy) {
        query = `SELECT * FROM ${table} ORDER BY ${orderBy} DESC`;
      }
      data.transaction(txn => {
        txn.executeSql(
          query,
          [],
          (sqlTxn, res) => {
            let len = res.rows.length;
            if (len > 0) {
              let results = [];
              for (let i = 0; i < len; i++) {
                let item = res.rows.item(i);
                results.push(item);
              }
              resolve({
                length: len,
                data: results,
              });
            } else {
              resolve({
                length: 0,
                data: [],
              });
            }
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  };
  
  export function POST(table, object) {
    return new Promise((resolve, reject) => {
      var value = Object.values(object).map(x => `${x}`);
      var b = Object.keys(object).join(', ');
      var o = Object.keys(object)
        .map((x, i) => x.replace(x, '?'))
        .join(', ');
  
      data.transaction(txn => {
        txn.executeSql(
          `INSERT INTO ${table} (${b}) VALUES (${o})`,
          value,
          (sqlTxn, res) => {
            setTimeout(() => {
              resolve(res);
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  }
  
  export function UPDATE(table, object, key) {
    return new Promise((resolve, reject) => {
      var value = Object.values(object).map(x => `${x}`);
      var o = Object.entries(object)
        .map(x => {
          x.reduce((strs, key) => (x = strs + ' = ?'));
          return x;
        })
        .join(', ');
      data.transaction(txn => {
        txn.executeSql(
          `UPDATE ${table} SET ${o} WHERE ${key} = ?`,
          value.concat(`${object[key]}`),
          (sqlTxn, res) => {
            setTimeout(() => {
              resolve(res);
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  }
  
  export function DELETE(table, object, key) {
    return new Promise((resolve, reject) => {
      var value = object[key];
      data.transaction(txn => {
        txn.executeSql(
          `DELETE FROM ${table} WHERE ${key} = ?`,
          [value],
          (sqlTxn, res) => {
            setTimeout(() => {
              resolve(res);
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  }
  