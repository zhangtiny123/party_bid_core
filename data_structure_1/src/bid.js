function Bid(bid_name){
    this.name = bid_name;
    this.biddings = [];
}

var create_new_bid = function(activity_name) {
    var activities = JSON.parse(localStorage.activities);
    var the_activity = _.find(activities, function(activity) {
        return activity.name == activity_name;
    });
    var bid = new Bid('竞价'+(the_activity.bids.length+1));

    the_activity.bids.push(bid);
    localStorage.activities = JSON.stringify(activities);
};