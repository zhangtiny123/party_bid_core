var render_sign_ups = function(activity_id) {
    var sign_ups = JSON.parse(localStorage.sign_ups);

    return _.filter(sign_ups, function(sign_up) {
        return sign_up.activity_id == activity_id;
    });
};

var render_bids = function(activity_id) {
    var bids = JSON.parse(localStorage.bids);
    return _.filter(bids, function(bid) {
        return bid.activity_id == activity_id;
    })
};

var render_biddings = function(activity_id, bid_name) {
    var bids = JSON.parse(localStorage.bids);

    var current_activity_bid = _.filter(bids, function(bid) {
        return bid.activity_id == activity_id;
    });

    var current_bid = _.find(current_activity_bid, function(bid) {
        return bid.name == bid_name;
    });

    var sorted_list = _.sortBy(current_bid.biddings, function(bid) {
        return bid.price});

    var grouped_list =_.groupBy(sorted_list,function(temp) {
        return temp.price});

    return _.find(grouped_list,function(value,key){return value.length==1});
};