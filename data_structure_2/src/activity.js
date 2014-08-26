function Activity(activity_name) {
    this.id = "";
    this.name = activity_name;
    this.sign_ups = [];
    this.bids = [];
    this.biddings = {};
}

Activity.prototype.create = function() {
    var activities = JSON.parse(localStorage.activities);
    var activity_ids = JSON.parse(localStorage.activity_ids);
    var id_generator = localStorage.activity_id_generator;

    this.id = id_generator;
    activities[this.id] = this;
    activity_ids.push(this.id);
    var id_generator_num = parseInt(id_generator) + 1;

    localStorage.activities = JSON.stringify(activities);
    localStorage.activity_ids = JSON.stringify(activity_ids);
    localStorage.activity_id_generator = JSON.stringify(id_generator_num);
    localStorage.current_activity = this.id;
};