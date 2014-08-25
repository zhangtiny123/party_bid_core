function Bid(bid_name){
    this.name = bid_name;
    this.biddings = [];
}

var create_new_bid = function(activity_name) {
    var activities = JSON.parse(localStorage.activities);
    var right_activity = _.find(activities, function(activity) {
        return activity.name == activity_name;
    });

    console.log('bids_length:'+right_activity.bids.length);

    var bid = new Bid('竞价'+(right_activity.bids.length+1));

    right_activity.bids.push(bid);

    localStorage.activities = JSON.stringify(activities);
};