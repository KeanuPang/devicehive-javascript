/**
 * Notification List Query model
 */
class NotificationListQuery {

    /**
     * Creates Notification List Query model
     * @param {object} options - Options for instance
     * @param {string} options.deviceId - Device ID
     * @param {string} options.start - Start timestamp
     * @param {string} options.end - End timestamp
     * @param {string} options.notification - Notification name
     * @param {string} options.status - Command status
     * @param {string} options.sortField - Sort field
     * @param {string} options.sortOrder - Sort order
     * @param {number} options.take - Limit param
     * @param {number} options.skip - Skip param
     */
    constructor({ deviceId, start, end, notification, status, sortField, sortOrder, take, skip } = {}) {
        const me = this;

        me.deviceId = deviceId;
        me.start = start;
        me.end = end;
        me.notification = notification;
        me.status = status;
        me.sortField = sortField;
        me.sortOrder = sortOrder;
        me.take = take;
        me.skip = skip;
    }

    get deviceId() {
        return this._deviceId;
    }

    set deviceId(value) {
        this._deviceId = value;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = value;
    }

    get end() {
        return this._end;
    }

    set end(value) {
        this._end = value;
    }

    get notification() {
        return this._notification;
    }

    set notification(value) {
        this._notification = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get sortField() {
        return this._sortField;
    }

    set sortField(value) {
        this._sortField = value;
    }

    get sortOrder() {
        return this._sortOrder;
    }

    set sortOrder(value) {
        this._sortOrder = value;
    }

    get take() {
        return this._take;
    }

    set take(value) {
        this._take = value;
    }

    get skip() {
        return this._skip;
    }

    set skip(value) {
        this._skip = value;
    }

    /**
     *
     * @returns {Object}
     */
    toObject() {
        const me = this;

        return {
            deviceId: me.deviceId,
            start: me.start,
            end: me.end,
            notification: me.notification,
            status: me.status,
            sortField: me.sortField,
            sortOrder: me.sortOrder,
            take: me.take,
            skip: me.skip
        }
    }
}


module.exports = NotificationListQuery;