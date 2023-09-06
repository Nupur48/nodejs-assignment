let empArray =

    [

        {

            "empno": 7839.0,

            "ename": "KING",

            "deptno": 10.0

        },

        {

            "empno": 7782.0,

            "ename": "CLARK",

            "deptno": 10.0

        },

        {

            "empno": 7369.0,

            "ename": "SMITH",

            "deptno": 20.0

        },

        {

            "empno": 7499.0,

            "ename": "ALLEN",

            "deptno": 30.0

        },

        {

            "empno": 7521.0,

            "ename": "WARD",

            "deptno": 30.0

        }

    ]



let deptArray =

    [

        {

            "loc": "DALLAS",

            "dname": "RESEARCH",

            "deptno": 20.0

        },

        {

            "loc": "CHICAGO",

            "dname": "SALES",

            "deptno": 30.0

        },

        {

            "loc": "NEW YORK",

            "dname": "ACCOUNTING",

            "deptno": 10.0

        },

        {

            "loc": "BOSTON",

            "dname": "OPERATIONS",

            "deptno": 40.0

        }

    ]

let combinedData = empArray.map((employee) => {
    const department = deptArray.find((dept) => dept.deptno === employee.deptno);
    return {
        empno: employee.empno,
        ename: employee.ename,
        deptno: employee.deptno,
        loc: department.loc,
        dname: department.dname,
    };
});

console.log(combinedData);

