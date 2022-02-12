let resultData = [];

const db1 = {
    "1": {
        id: 1,
        sex: 'M',
        pic: '😎'
    },
    "4": {
        id: 4,
        sex: 'F',
        pic: '🤣'
    },
    "6": {
        id: 6,
        sex: 'M',
        pic: '🤪'
    },
}

const db2 = {
    "2": {
        id: 2,
        sex: 'F',
        pic: '😅'
    },
    "5": {
        id: 5,
        sex: 'M',
        pic: '😂'
    },
}

const db3 = {
    "3": {
        id: 3,
        sex: 'M',
        pic: '😍'
    },
}

const metaData = {
    "1": "db1",
    "2": "db2",
    "3": "db3",
    "4": "db1",
    "5": "db2",
    "6": "db1",
}

const userData = {
    "1": {
        name: "Vitou",
        age: 18,
        private: false
    },
    "2": {
        name: "Pov Panha",
        age: 22,
        private: true
    },
    "3": {
        name: "KhemRith",
        age: 17,
        private: false
    },
    "4": {
        name: "Tishia",
        age: 20,
        private: false
    },
    "5": {
        name: "dynana",
        age: 19,
        private: true
    },
    "6": {
        name: "Yuthna",
        age: 22,
        private: false
    },
}

const retrieveData = async function() {
    let results = await Promise.all([db1, db2, db3, metaData, userData])
    return results;
}();

const disMsg = (index, input_id) => {
    document.getElementsByClassName('result')[0].style.fontSize = '16px'
    document.getElementsByClassName('result')[0].innerHTML = `<table>` +
        `<tr>` +
        `<th>Id</th>` +
        `<th>Gender</th>` +
        `<th>Photo</th>` +
        `<th>Name</th>` +
        `<th>Age</th>` +
        `</tr>` +
        `<tr>` +
        `<td>${resultData[index][input_id].id}</td>` +
        `<td>${resultData[index][input_id].sex}</td>` +
        `<td>${resultData[index][input_id].pic}</td>` +
        `<td>${resultData[4][input_id].name}</td>` +
        `<td>${resultData[4][input_id].age}</td>` +
        `</tr>` +
        `</table>`
}

const errorMsg = () => {
    document.getElementsByClassName('result')[0].innerHTML = `This user is in private. We can not display 🙅`;
    document.getElementsByClassName('result')[0].style.fontSize = '24px'
}

document.getElementById('search').addEventListener('click', function() {
    const input_id = document.getElementById('input').value;

    retrieveData.then(async(arrJson) => {
        resultData = arrJson;
        console.log(resultData);

        console.log(resultData[3][`${input_id}`])
        if (resultData[3][`${input_id}`] == "db1") {
            if (resultData[4][`${input_id}`].private == false) {
                disMsg(0, input_id);
            } else {
                errorMsg();
            }
        } else if (resultData[3][`${input_id}`] == "db2") {
            if (resultData[4][`${input_id}`].private == false) {
                disMsg(1, input_id);
            } else {
                errorMsg();
            }
        } else if (resultData[3][`${input_id}`] == "db3") {
            if (resultData[4][`${input_id}`].private == false) {
                disMsg(2, input_id);
            } else {
                errorMsg();
            }
        } else {
            alert("Input out of range. It should be 1 to 6!");
        }
    });
});