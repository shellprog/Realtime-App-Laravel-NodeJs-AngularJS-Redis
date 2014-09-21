app.factory('Users', function ($q, $http)
{
    var self = {

    };

    self.create = function(user)
    {
        var d = $q.defer();
        $http.post( '/api/users/create', user ).
            success(function (data)
            {
                d.resolve(data);
            }
        );
        return d.promise;
    };

    self.update = function(user)
    {
        var d = $q.defer();
        $http.post( '/api/users/update', user ).
            success(function (data)
            {
                d.resolve(data);
            }
        );
        return d.promise;
    };

    self.all = function()
    {
        var d = $q.defer();
        $http.get( '/api/users/all' ).
            success(function (data)
            {
                d.resolve(data);
            }
        );
        return d.promise;
    };

    self.delete = function(user_id)
    {
        var d = $q.defer();
        $http.get( '/api/users/delete/'+user_id).
            success(function (data)
            {
                d.resolve(data);
            }
        );
        return d.promise;
    };

    return self;
});