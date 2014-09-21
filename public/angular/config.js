var ex;
app.config(function($interpolateProvider, $routeProvider, $locationProvider){
        $interpolateProvider.startSymbol('//').endSymbol('//');
        $locationProvider.html5Mode(false).hashPrefix('!');
        $routeProvider.
            when('/dashboard',{
                templateUrl: '/partials/dashboard.html',
                controller: 'DashboardController'
            }).
            when('/users',{
                templateUrl: '/partials/users/index.html',
                controller: 'UsersController'
            }).
            when('/users/customer',{
                templateUrl: '/partials/users/search.html',
                controller: 'UsersController'
            }).
            when('/users/customer/:id',{
                templateUrl: '/partials/users/search_edit.html',
                controller: 'UsersController'
            }).
            when('/users/edit/:id',{
                templateUrl: '/partials/users/edit.html',
                controller: 'UsersController'
            }).
            when('/users/unsubscribe',{
                templateUrl: '/partials/users/publicaster.html',
                controller: 'UsersController'
            }).
            when('/users/create',{
                templateUrl: '/partials/users/create.html',
                controller: 'UsersController'
            }).
            when('/users/groups',{
                templateUrl: '/partials/users/groups.html',
                controller: 'UsersController'
            }).
            when('/users/price-alerts',{
                templateUrl: '/partials/price-alerts/user_alerts.html',
                controller: 'PriceAlertsController'
            }).
            when('/profile',{
                templateUrl: '/partials/users/edit_profile.html',
                controller: 'ProfileController'
            }).
            when('/profile/:id',{
                templateUrl: '/partials/users/profile.html',
                controller: 'ProfileController'
            }).
            when('/accounts',{
                templateUrl: '/partials/accounts/index.html',
                controller: 'AccountsController'
            }).
            when('/accounts/create',{
                templateUrl: '/partials/accounts/create.html',
                controller: 'AccountsController'
            }).
            when('/orders',{
                templateUrl: '/partials/orders/index.html',
                controller: 'OrdersController'
            }).
            when('/orders/received',{
                templateUrl: '/partials/orders/received_index.html',
                controller: 'OrdersController'
            }).
            when('/orders/search',{
                templateUrl: '/partials/orders/search.html',
                controller: 'OrdersController'
            }).
            when('/orders/view/:id',{
                templateUrl: '/partials/orders/view.html',
                controller: 'OrdersController'
            }).
            when('/orders/view/received/:id',{
                templateUrl: '/partials/orders/received.html',
                controller: 'OrdersController'
            }).
            when('/orders/create',{
                templateUrl: '/partials/orders/create.html',
                controller: 'OrdersController'
            }).
            when('/orders/quote',{
                templateUrl: '/partials/quote/index.html',
                controller: 'QuoteController'
            }).
            when('/orders/quote/new',{
                templateUrl: '/partials/quote/new.html',
                controller: 'QuoteController'
            }).
            when('/orders/quote/edit/:id',{
                templateUrl: '/partials/quote/edit.html',
                controller: 'QuoteController'
            }).
            when('/promotions',{
                templateUrl: '/partials/promotions/index.html',
                controller: 'PromotionsController'
            }).
            when('/promotions/edit/:id',{
                templateUrl: '/partials/promotions/edit.html',
                controller: 'PromotionsController'
            }).
            when('/promotions-home',{
                templateUrl: '/partials/promotions-home/index.html',
                controller: 'HomePromotionsController'
            }).
            when('/promotions-home/edit/:id',{
                templateUrl: '/partials/promotions-home/edit.html',
                controller: 'HomePromotionsController'
            }).
            when('/products',{
                templateUrl: '/partials/products/index.html',
                controller: 'ProductsController'
            }).
            when('/products/add',{
                templateUrl: '/partials/products/add.html',
                controller: 'ProductsController'
            }).
            when('/products/edit/:id',{
                templateUrl: '/partials/products/edit.html',
                controller: 'ProductsController'
            }).
            when('/products/related',{
                templateUrl: '/partials/related_products/index.html',
                controller: 'RelatedProductsController'
            }).
            when('/products/related/:id',{
                templateUrl: '/partials/related_products/edit.html',
                controller: 'RelatedProductsController'
            }).
            when('/products/categories',{
                templateUrl: '/partials/products/categories.html',
                controller: 'ProductsController'
            }).
            when('/products/subcategory',{
                templateUrl: '/partials/products/subcategory.html',
                controller: 'SubcategoryController'
            }).
            when('/products/subcategory/:id',{
                templateUrl: '/partials/products/subcategory_edit.html',
                controller: 'SubcategoryController'
            }).
            when('/products/shipping',{
                templateUrl: '/partials/products/shipping.html',
                controller: 'ProductsController'
            }).
            when('/content',{
                templateUrl: '/partials/content/index.html',
                controller: 'ContentController'
            }).
            when('/content/create',{
                templateUrl: '/partials/content/create.html',
                controller: 'ContentController'
            }).
            when('/content/edit/:id',{
                templateUrl: '/partials/content/edit.html',
                controller: 'ContentController'
            }).
            when('/content/categories',{
                templateUrl: '/partials/content/categories.html',
                controller: 'ContentController'
            }).
            when('/settings',{
                templateUrl: '/partials/settings/index.html',
                controller: 'SettingsController'
            }).
            when('/settings/holidays',{
                templateUrl: '/partials/settings/holidays.html',
                controller: 'SettingsController'
            }).
            when('/settings/payments',{
                templateUrl: '/partials/settings/payments.html',
                controller: 'SettingsController'
            }).
            when('/settings/marketing',{
                templateUrl: '/partials/settings/marketingCodes.html',
                controller: 'SettingsController'
            }).
            when('/messages',{
                templateUrl: '/partials/messages/index.html',
                controller: 'MessagesController'
            }).
            when('/reporting',{
                templateUrl: '/partials/reporting/index.html',
                controller: 'ReportingController'
            }).
            when('/reporting/sales',{
                templateUrl: '/partials/reporting/sales.html',
                controller: 'ReportingController'
            }).
            when('/reporting/orders',{
                templateUrl: '/partials/reporting/orders.html',
                controller: 'ReportingController'
            }).
            when('/reporting/analytics',{
                templateUrl: '/partials/reporting/analytics.html',
                controller: 'ReportingController'
            }).
            when('/reporting/net-inventory',{
                templateUrl: '/partials/reporting/net-inventory.html',
                controller: 'ReportController'
            }).
            when('/reviews',{
                templateUrl: '/partials/reviews/index.html',
                controller: 'ReviewsController'
            }).
            when('/email-images',{
                templateUrl: '/partials/email_images/index.html',
                controller: 'EmailImagesController'
            }).
            when('/testimonials',{
                templateUrl: '/partials/testimonials/index.html',
                controller: 'TestimonialsController'
            }).
            when('/winners',{
                templateUrl: '/partials/winners/index.html',
                controller: 'WinnersController'
            }).
            when('/monthly-accumulation',{
                templateUrl: '/partials/monthly-accumulation/index.html',
                controller: 'MonthlyAccumulationController'
            }).
            when('/update-tool',{
                templateUrl: '/partials/update-tool/index.html',
                controller: 'ToolController'
            }).
            when('/authors',{
                templateUrl: '/partials/authors/index.html',
                controller: 'AuthorController'
            }).
            when('/podcast_authors',{
                templateUrl: '/partials/podcast-authors/index.html',
                controller: 'PodcastAuthorController'
            }).
            when('/search-terms',{
                templateUrl: '/partials/search-terms/index.html',
                controller: 'SearchTermsController'
            }).
            when('/price-alerts',{
                templateUrl: '/partials/price-alerts/index.html',
                controller: 'PriceAlertsController'
            }).
            when('/out-of-stock-alerts',{
                templateUrl: '/partials/out-of-stock-alerts/index.html',
                controller: 'OutOfStockAlertsController'
            }).
            when('/charts-domain-api',{
                templateUrl: '/partials/charts-domain-api/index.html',
                controller: 'ChartsAPIController'
            }).
            when('/packing-tool',{
                templateUrl: '/partials/packing-tool/index.html',
                controller: 'PackingController'
            }).
            when('/marketing-email',{
                templateUrl: '/partials/marketing-email/index.html',
                controller: 'MarketingEmailController'
            }).
            when('/marketing-email/preview',{
                templateUrl: '/partials/marketing-email/preview.html',
                controller: 'MarketingEmailController'
            }).
            when('/marketing-email/list',{
                templateUrl: '/partials/marketing-email/list.html',
                controller: 'MarketingEmailController'
            }).
            otherwise({
                redirectTo: '/dashboard'
            })
        ;
    }
);