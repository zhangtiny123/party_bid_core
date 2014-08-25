function notify_sms_received(sms_json){
    var received_message = sms_json.messages[0].message;
    var message_head = received_message.slice(0,2).toLowerCase();
    var phone_number = sms_json.messages[0].phone;

    if (message_head == 'bm' && localStorage.is_signing_up == "true" && !is_repeated_sign_up(phone_number)) {
        sign_up_save(received_message,phone_number);
    }
    else if (message_head == 'jj' && localStorage.is_bidding == "true"
        && !is_repeated_bid(phone_number) && is_signed_up(phone_number)) {
        bid_save(received_message,phone_number);
    }
    else {

    }
}

var is_repeated_sign_up = function(phone_number) {
    return is_signed_up(phone_number);
};

var is_repeated_bid = function(phone_number) {
    var activities = JSON.parse(localStorage.activities);
    var current_activity_name = localStorage.current_activity;
    var current_bid_name = localStorage.current_bid;
    var current_activity = _.find(activities, function(activity) {
        return activity.name == current_activity_name;
    });
    var current_bid = _.find(current_activity.bids, function(bid) {
        return bid.name = current_bid_name;
    });

    return _.find(current_bid.biddings, function(bidding) {
        return bidding.phone == phone_number;
    }) != undefined;
};

var is_signed_up = function(phone_number) {
    var activities = JSON.parse(localStorage.activities);
    var current_activity_name = localStorage.current_activity;
    var current_activity = _.find(activities, function(activity) {
        return activity.name == current_activity_name;
    });

    return _.find(current_activity.sign_ups, function(sign_up) {
        return sign_up.phone == phone_number;
    }) != undefined;
};

var get_name_by_phone = function(phone_number) {
    var activities = JSON.parse(localStorage.activities);
    var current_activity_name = localStorage.current_activity;
    var current_activity = _.find(activities, function(activity) {
        return activity.name == current_activity_name;
    });

    return _.find(current_activity.sign_ups, function(sign_up) {
        return sign_up.phone == phone_number;
    }).name;
};

var bid_save = function(message, phone) {
    var activities = JSON.parse(localStorage.activities);
    var current_activity_name = localStorage.current_activity;
    var current_bid_name = localStorage.current_bid;
    var current_activity = _.find(activities, function(activity) {
        return activity.name == current_activity_name;
    });
    var current_bid = _.find(current_activity.bids, function(bid) {
        return bid.name = current_bid_name;
    });
    var bid_item = {
        name : get_name_by_phone(phone),
        phone : phone,
        price : message.slice(2)
    }

    current_bid.biddings.push(bid_item);
    localStorage.activities = JSON.stringify(activities);
};

var sign_up_save = function(message, phone) {
    var sign_up = new Sign_up(message.slice(2), phone);
    var activities = JSON.parse(localStorage.activities);
    var current_activity_name = localStorage.current_activity;
    var current_activity = _.find(activities, function(activity) {
        return activity.name == current_activity_name;
    });
    current_activity.sign_ups.push(sign_up);
    localStorage.activities = JSON.stringify(activities);
};