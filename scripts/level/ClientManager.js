all_clients_pics = [
    new Pic("images/people/m_becky.png", 150, 150),
    new Pic("images/people/m_chad.png", 150, 150),
    new Pic("images/people/m_incel.png", 150, 150),
    new Pic("images/people/m_stacy.png", 150, 150),
]


function randInt(to) {
    return Math.floor(Math.random() * to);
}

function randRange(from, to) {
    return from + randInt(to - from + 1)
}

function choice(arr) {
    const index = randInt(arr.length);
    return arr[index];
}

class ClientManager extends GameObject {

    constructor(settings, cursor, dollars) {
        super();
        this.dollars = dollars;
        this.cursor = cursor;
        this.settings = settings;
        this.slot_positions = [[0, 54], [200, 54], [400, 54]];
        this.slots = [null, null, null];
    }

    startGeneration() {
        this.startTime = new Date();
        for (let i = 0; i < this.settings.max_clients; i++)
            setTimeout(()=> this.gen_client(), 500 + i * 2000);
    }

    gen_desc() {
        const meat_c = randRange(this.settings.min_meat, this.settings.max_meat);
        const meat = [];
        while (meat.length !== meat_c) {
            const m = c_meats[randInt(this.settings.meat_to)];
            if (!meat.includes(m))
                meat.push(m);
        }
        meat.push(choice(c_cheese));


        const vegs_c = randRange(this.settings.min_vegs, this.settings.max_vegs);
        const vegs = [];
        while (vegs.length !== vegs_c) {
            const v = c_vegs[randInt(this.settings.vegs_to)];
            if (!vegs.includes(v))
                vegs.push(v);
        }


        const sauces_c = randRange(this.settings.min_sauces, this.settings.max_sauces);
        const sauces = [];
        while (sauces.length !== sauces_c) {
            const v = c_sauses[randInt(this.settings.sauces_to)];
            if (!sauces.includes(v))
                sauces.push(v);
        }

        return meat.concat(vegs).concat(sauces)
    }

    gen_client() {
        const now = new Date();
        if (now - this.startTime > this.settings.time)
            return;

        for (const i in this.slot_positions) {
            if (this.slots[i] == null) {
                this.slots[i] = new Client(choice(all_clients_pics), this.gen_desc(), this.cursor, this.dollars);
                this.slots[i].x = this.slot_positions[i][0];
                this.slots[i].y = this.slot_positions[i][1];
                return;
            }
        }
    }

    get isFinished() {
        for (const i in this.slot_positions) {
            if (this.slots[i] != null)
                return false;
        }

        const now = new Date();
        return now - this.startTime > this.settings.time;
    }

    onUpdate(delta) {
        const now = new Date();
        if (now - this.startTime > this.settings.time) {
            document.getElementById("time").innerText = `Closed`;
        } else {
            const msLeft = Math.ceil((this.settings.time - (now - this.startTime)) / 1000);
            document.getElementById("time").innerText = `${msLeft} s.`
        }

        for (const i in this.slots) {
            if (this.slots[i] != null && this.slots[i].is_deleted) {
                this.slots[i] = null;
                setTimeout(() => this.gen_client(), 600);
            }
        }
    }

}