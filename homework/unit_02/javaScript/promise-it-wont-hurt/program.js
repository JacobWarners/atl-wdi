var promise = new Promise(function (fulfill, reject) {
      setTimeout(() => {
          return reject(new Error("REJECTED!"));
      }, 300);
    });

    function onReject(Error) {
      console.log(Error);
    }

    promise.catch(onReject(Error));