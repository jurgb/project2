app.controller("AngCategorieController", function($scope, CategorieAPI){

     $scope.index = function(){
      //Alle notifications binnehalen en in scope stoppen
		CategorieAPI.index()
			.success(function(data){

				$scope.categories = data;

                console.log(data);
                
			});
    };
    $scope.categories = [
//        {
//            id: "1",
//            name: "Sightseeing",
//            subtitle: "Find your suiting sights",
//            notes: "Some notes for sightseeing",
//            icoon: "camera82.svg"
//        },
//        {
//            id: "2",
//            name: "Sports",
//            subtitle: "Find your favorite sports",
//            notes: "Some notes for sports",
//            icoon: "soccer42.svg"
//        },
//        {
//            id: "3",
//            name: "Food & dinner",
//            subtitle: "Find your favorite food places",
//            notes: "Some notes for food & dinner",
//            icoon: "covered16.svg"
//        },
//        {
//            id: "4",
//            name: "Culture",
//            subtitle: "Find your suiting cultural places",
//            notes: "Some notes for culture",
//            icoon: "fine1.svg"
//        },
//        {
//            id: "5",
//            name: "Favorites",
//            subtitle: "Find your suiting favorites",
//            notes: "Some notes for favorites",
//            icoon: "like18.svg"
//        }
    ];
    
    $scope.contentvoorbeelden = [
        {
            Categorie: "1",
            info: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            picture:"dest1.jpg"
        },
         {
            Categorie: "1",
            info: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
             picture:"dest2.jpg"
        },
         {
            Categorie: "2",
            info: "The titles of Washed Out's breakthrough song and the first single from Paracosm share thetwo most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
             picture:"dest3.jpg"
        },
         {
            Categorie: "5",
            info: "The titles of Washed Out's breakthrough song and the first single from Paracosm share thetwo most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
             picture:"dest1.jpg"
        },
         {
            Categorie: "3",
            info: "The titles of Washed Out's breakthrough song and the first single from Paracosm share thetwo most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
             picture:"dest2.jpg"
        },
         {
            Categorie: "2",
            info: "The titles of Washed Out's breakthrough song and the first single from Paracosm share thetwo most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
             picture:"dest1.jpg"
        }   
    ];
    
    
});