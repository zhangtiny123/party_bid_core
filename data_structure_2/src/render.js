var render_sign_ups = function(activity_name) {
    var activities = JSON.parse(localStorage.activities);
    var ids = JSON.parse(localStorage.activity_ids);

    for (var i=0; i<ids.length; i++) {
        if (activities[ids[i]].name == activity_name) {
            return activities[ids[i]].sign_ups;
        }
    }
//
//    var current_activity = _.find(activities, function(activity) {
//        return activity.name = activity_name;
//    });
//
//    return current_activity.sign_ups;
};

var transform_bids_to_view_model = function(activity_id) {
    var activities = JSON.parse(localStorage.activities);

    var current_activity = activities[activity_id];

    return current_activity.bids;
};

var transform_biddings_to_view_model = function(activity_id, bid_name) {
    var activities = JSON.parse(localStorage.activities);

    var current_activity = activities[activity_id];
    var current_bid = current_activity.biddings[bid_name];

    var sorted_list = _.sortBy(current_bid,function(bid){return bid.price});
    var grouped_list =_.groupBy(sorted_list,function(temp){return temp.price});

    return _.find(grouped_list,function(value,key){return value.length==1});
};
