function create_new_bid(activity_id) {
    var activities = JSON.parse(localStorage.activities);

    var bid_name = "竞价"+(activities[activity_id].bids.length+1);
    activities[activity_id].bids.push(bid_name);
    activities[activity_id].biddings[bid_name] = [];

    localStorage.activities = JSON.stringify(activities);
}