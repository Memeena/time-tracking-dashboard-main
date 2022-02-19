"use strict";

const arrData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const dailyTab = document.querySelector(".daily");
const weeklyTab = document.querySelector(".weekly");
const monthlyTab = document.querySelector(".monthly");
const mainContent = document.querySelectorAll(".dashboard__content--main");
const prevContent = document.querySelectorAll(".dashboard__content--prev-span");
const content = document.querySelectorAll(".dashboard__subheading--content");

dailyTab.addEventListener("click", function () {
  for (let i = 0; i < arrData.length; i++) {
    if (content[i].textContent === arrData[i].title) {
      mainContent[i].textContent = arrData[i].timeframes.daily.current + "hrs";
      prevContent[i].textContent = arrData[i].timeframes.daily.previous + "hrs";
    }
  }
});

weeklyTab.addEventListener("click", function () {
  for (let i = 0; i < arrData.length; i++) {
    if (content[i].textContent === arrData[i].title) {
      mainContent[i].textContent = arrData[i].timeframes.weekly.current + "hrs";
      prevContent[i].textContent =
        arrData[i].timeframes.weekly.previous + "hrs";
    }
  }
});

monthlyTab.addEventListener("click", function () {
  for (let i = 0; i < arrData.length; i++) {
    if (content[i].textContent === arrData[i].title) {
      mainContent[i].textContent =
        arrData[i].timeframes.monthly.current + "hrs";
      prevContent[i].textContent =
        arrData[i].timeframes.monthly.previous + "hrs";
    }
  }
});
