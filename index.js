function withDrawMoney (amount) {
  return new Promise((resolve,reject) => 
                      {
                        //get money from ATM
                        setTimeout(
                          () => {
                            if (amount > 100) {
                              reject(new Error('Gak cukup uang bro'));
                            }
                            resolve(amount); 
                          }
                          ,2000);
                        
                        
                      }
                    );
}

function buyCinemaTicket (money) {
  return new Promise((resolve,reject) => {

      setTimeout(()=> {
        if (money < 10) {
          reject(new Error ('Kamu gak cukup uang beli tiket'));  
        }
        resolve('ticket-1');
        
      },2000);
  });
}


function goInsideCinema (ticket) {
  return new Promise((resolve,reject) => {
    setTimeout ( () => {
      if (!ticket) {
        reject(new Error('Kamu tidak memiliki tiket'));
      }
      resolve('Selamat menikmati film anda');
    } ,2000);

  });
}


function watchMovie () {
  withDrawMoney(9)
  .then((money) => {return buyCinemaTicket(money) ; })
  .then((ticket) => {return goInsideCinema(ticket) ; })
  .then((result) => {console.log(result) ; })
  .catch((err) => { console.log(err) ;  });
}

watchMovie();