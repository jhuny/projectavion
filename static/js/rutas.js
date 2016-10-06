

   
	var app=angular.module("app",['agGrid']);
	app.controller("control",function($http,$scope){
     
	    var columnDefs = [
         {headerName: "Codigo", field: 'cod_div', width: 100,sort: 'desc'},
         {headerName: "Nombre", field: 'nom_div', width: 100},
    
       
        
    ];


    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: null,
        enableSorting: true

    };

	/* $http.get("http://www.ag-grid.com/olympicWinners.json").success(function(data){
        console.log(JSON.stringify(data.data));
                   $scope.gridOptions.api.setRowData(data.data);
      });*/
	///hola/listarRutas?format=json
	
          $http.get("/div?format=json")
        .then(function(res){
            alert("entro"); 
            $scope.gridOptions.api.setRowData(res.data['results']);
        });


		
	
});
