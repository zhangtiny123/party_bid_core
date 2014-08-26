var render_sign_ups = function(activity_name) {
    var activities = JSON.parse(localStorage.activities);
    var current_activity = _.find(activities, function(activity) {
        return activity.name = activity_name;
    });

    return current_activity.sign_ups;
};

var transform_bids_to_view_model = function(activity_name) {
    var activities = JSON.parse(localStorage.activities);
    var current_activity = _.find(activities, function(activity) {
        return activity.name = activity_name;
    });

    return current_activity.bids;
};

var transform_biddings_to_view_model = function(activity_name, bid_name) {
    var activities = JSON.parse(localStorage.activities);
    var current_activity = _.find(activities, function(activity) {
        return activity.name = activity_name;
    });
    var current_bid = _.find(current_activity.bids, function(bid) {
        return bid.name == bid_name;
    });

    var sorted_list = _.sortBy(current_bid.biddings,function(bid){return bid.price});
    var grouped_list =_.groupBy(sorted_list,function(temp){return temp.price});
    return _.find(grouped_list,function(value,key){return value.length==1});

};
