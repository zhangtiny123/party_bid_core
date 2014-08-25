function Activity(activity_name){
    this.name = activity_name;
    this.sign_ups = [];
    this.bids = [];
}

Activity.prototype.create = function() {
    var activities = JSON.parse(localStorage.activities);

    var activity = {
        name : this.name,
        sign_ups : [],
        bids : []
    };

    activities.push(activity);

    localStorage.activities = JSON.stringify(activities);
};

Activity.prototype.active = function() {
    localStorage.current_activity = this.name;
};