app.factory("CategorieAPI", function($http){

    var UserAPI = {};
    
    UserAPI.index = function(){
        
        categresults = [{
            id: "1",
            name: "Sightseeing",
            subtitle: "Find your suiting sights",
            notes: "Some notes for sightseeing",
            icoon: "camera82.svg"
        },
        {
            id: "2",
            name: "Sports",
            subtitle: "Find your favorite sports",
            notes: "Some notes for sports",
            icoon: "soccer42.svg"
        },
        {
            id: "3",
            name: "Food & dinner",
            subtitle: "Find your favorite food places",
            notes: "Some notes for food & dinner",
            icoon: "covered16.svg"
        },
        {
            id: "4",
            name: "Culture",
            subtitle: "Find your suiting cultural places",
            notes: "Some notes for culture",
            icoon: "fine1.svg"
        },
        {
            id: "5",
            name: "Favorites",
            subtitle: "Find your suiting favorites",
            notes: "Some notes for favorites",
            icoon: "like18.svg"
        }];
        
        return categresults;
    };
    return  UserAPI;
    
});