{
    {
      // Your API KEY
      const API_KEY = "AIzaSyAOoeivprNUlwwuJLRvUnu8qq3Jtw2OvZk";

      window.localStorage.setItem('Status-Data', 'Load') ;
      function displayResult2(response) {
          
          let values = response.result.values;
          let Clints = [] ;

          
          for (let i = 1; i < values.length; i++) {
              
            const clint = {} ;
            
            clint.code = values[i][0];
            clint.name = values[i][1];
            clint.phone1 = values[i][2];
            clint.phone2 = values[i][3];
            clint.location1 = values[i][4];
            clint.location2 = values[i][5];
            clint.address = values[i][6];
            clint.zone = values[i][7];


            Clints.push(clint) ;
        }
    
          window.localStorage.setItem('Status-Data', response.status) ;
          window.localStorage.setItem('Clints', JSON.stringify(Clints)) ;
        //   console.log(values)
      };



      function loadData() {
        // Spreadsheet ID
        const spreadsheetId = "16NWdABWvMI2YzSK1hQ5g9pXC8OJueLD_O1YJekiBiUw";
        const range = "'Customer data'!A:H";

        // Daynamec Get Number Of Sheet
        // if (window.location.href.includes('driver001') == true) {
        //   range = "'Driver 1'!A:Z";
        // } else if (window.location.href.includes('driver002') == true) {
        //   range = "'Driver 2'!A:Z";
        // } else if (window.location.href.includes('driver003') == true) {
        //   range = "'Driver 3'!A:Z";
        // } else if (window.location.href.includes('driver004') == true) {
        //   range = "'Driver 4'!A:Z";
        // } else {
        //     return range = "'Driver 4'!A:Z";
        // }

        getPublicValues({ spreadsheetId, range }, displayResult2);
      }

      window.addEventListener("load", (e) => {
        initOAuthClient({ apiKey: API_KEY });
      });

      document.addEventListener("gapi-loaded", (e) => {
        loadData();
      });


    }
  }


