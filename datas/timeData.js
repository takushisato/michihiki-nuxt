let date = new Date();

let lastData = new Date(date.getFullYear(), date.getMonth() + 1, 0); //今月
let nextLastData = new Date(date.getFullYear(), date.getMonth() + 2, 0); //来月
let afterNextLastData = new Date(date.getFullYear(), date.getMonth() + 3, 0); //再来月

let lastDay = lastData.getDate(); // 今月の月末日
let nextLastDay = nextLastData.getDate(); // 来月の月末日
let afterNextLastDay = afterNextLastData.getDate(); // 再来月の月末日

let yr = date.getFullYear(); // 年
let mn = date.getMonth() + 1; // 月
let dy = date.getDate(); // 日

export let timeDatas = {
        lastDay,
        nextLastDay,
        afterNextLastDay,
        yr,
        mn,
        dy,
};