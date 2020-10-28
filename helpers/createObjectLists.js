import React from "react";

export const establishCategoryTasksListInObjectFormat = (itemObject) => {
    var finalisedList = [];

    // now loop through each item to obatin id and value and assign to an object. Push this object into the array
    for (
        var loopIterator = 0;
        loopIterator < itemObject.length;
        loopIterator++
    ) {
        var tempObject = {};
        tempObject.label = itemObject[loopIterator].category_name;
        tempObject.value = itemObject[loopIterator].category_id;
        tempObject.backgroundColor = itemObject[loopIterator].category_colour;
        tempObject.icon = itemObject[loopIterator].category_icon;
        finalisedList.push(tempObject);
    }

    return finalisedList;
};

export const establishRewardListInObjectFormat = (rewards) => {
    var rewardList = [];

    // now loop through each item to obatin id and value and assign to an object. Push this object into the array
    for (var loopIterator = 0; loopIterator < rewards.length; loopIterator++) {
        var tempObject = {};
        tempObject.label =
            rewards[loopIterator].reward_name +
            " (" +
            rewards[loopIterator].reward_points +
            ")";
        tempObject.value = rewards[loopIterator].reward_id;
        tempObject.points = rewards[loopIterator].reward_points;
        tempObject.icon = "trophy";
        tempObject.backgroundColor = "gold";
        rewardList.push(tempObject);
    }

    return rewardList;
};

export const establishKidListInObjectFormat = (kids) => {
    var kidList = [];
    // now loop through each item to obatin id and value and assign to an object. Push this object into the array

    for (var loopIterator = 0; loopIterator < kids.length; loopIterator++) {
        var tempObject = {};
        tempObject.label = kids[loopIterator].user_name;
        tempObject.value = kids[loopIterator].user_id;

        kidList.push(tempObject);
    }

    return kidList;
};