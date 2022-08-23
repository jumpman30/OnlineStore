class Order {

    constructor(id, items, amount, date){
        this.id = id;
        this.items= items;
        this.amount=amount;
        this.date=date;
    }

    get stringDate(){
        return this.date.toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }


}

export default Order;