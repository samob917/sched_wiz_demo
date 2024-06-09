const students = [
    {
        id: "0" ,
        year: "2024",
        completed_courses: {
                "ELA": [
                    "English 1 Hon"
                ],
                "Mathematics": [
                    "Algebra 1"
                ],
            },
        preferences: {
                "Dual Enrollment Composition I": 25,
                "AICE General Paper": 25,
                "English 2 Hon": 25,
                "English 1 Reg": 25,
                "Geometry Hon": 25,
            },
        valid_courses: {
                "ELA": [
                    "Dual Enrollment Composition I",
                    "AICE General Paper",
                    "English 2 Hon",
                    "English 1 Reg"
                ],
                "Mathematics": [
                    "Geometry Hon",
                    "Geometry Reg"
                ],
            },
        remaining_reqs: {
                "ELA": 3,
                "Mathematics": 3,
                "Science": 3,
                "Social Studies": 3,
                "Fine Arts": 1,
                "Physical Education": 1,
                "Electives": 8,
                "Online Course": 1
            },
        penalties: {
                "English 1 Reg": {
                    "penalty": 25
                },
                "English 1 Hon": {
                    "penalty": 750
                },
                "English 2 Reg": {
                    "penalty": 1000
                },
                "English 2 Hon": {
                    "penalty": 25
                },
            },
        },
];

module.exports = {
    students,
  };