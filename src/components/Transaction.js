class Transaction {

    createId() {
        return Math.floor(Math.random() * 1000000);
    }

    constructor(desc, value, type) {
        this.id = this.createId();
        this.desc = desc;
        this.value = value;
        this.type = type;
    }
}

export default Transaction;