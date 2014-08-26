function create_new_bid(activity_id) {
    var activities = JSON.parse(localStorage.activities);
    var bids = JSON.parse(localStorage.bids);

    var bid_name = "竞价"+(bids.length+1);
    var bid_item = {
        name: bid_name,
        id: activity_id,
        biddings: []
    };
    bids.push(bid_item);

    localStorage.bids = JSON.stringify(bids);
    localStorage.activities = JSON.stringify(activities);
}