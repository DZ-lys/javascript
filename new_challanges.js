const employees = [
    {
      id: 1,
      name: 'Alice',
      department: 'Engineering',
      salary: 85000,
      performance: [4, 5, 3, 4],
      projects: [
        { projectId: 'P101', status: 'completed', hoursSpent: 120 },
        { projectId: 'P102', status: 'in-progress', hoursSpent: 60 }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      department: 'HR',
      salary: 60000,
      performance: [3, 4, 4, 3],
      projects: [
        { projectId: 'P201', status: 'completed', hoursSpent: 90 },
        { projectId: 'P202', status: 'completed', hoursSpent: 110 }
      ]
    },
    {
      id: 3,
      name: 'Charlie',
      department: 'Engineering',
      salary: 95000,
      performance: [5, 5, 4, 5],
      projects: [
        { projectId: 'P301', status: 'completed', hoursSpent: 200 },
        { projectId: 'P302', status: 'in-progress', hoursSpent: 80 }
      ]
    },
    {
      id: 4,
      name: 'Diana',
      department: 'Marketing',
      salary: 72000,
      performance: [4, 4, 4, 3],
      projects: [
        { projectId: 'P401', status: 'completed', hoursSpent: 150 },
        { projectId: 'P402', status: 'in-progress', hoursSpent: 50 }
      ]
    },
    {
      id: 5,
      name: 'Edward',
      department: 'Sales',
      salary: 65000,
      performance: [3, 4, 3, 2],
      projects: [
        { projectId: 'P501', status: 'completed', hoursSpent: 100 },
        { projectId: 'P502', status: 'in-progress', hoursSpent: 70 }
      ]
    },
    {
      id: 6,
      name: 'Fiona',
      department: 'Finance',
      salary: 90000,
      performance: [5, 4, 5, 4],
      projects: [
        { projectId: 'P601', status: 'completed', hoursSpent: 160 },
        { projectId: 'P602', status: 'completed', hoursSpent: 140 }
      ]
    },
    {
      id: 7,
      name: 'George',
      department: 'Engineering',
      salary: 87000,
      performance: [4, 3, 4, 4],
      projects: [
        { projectId: 'P701', status: 'completed', hoursSpent: 130 },
        { projectId: 'P702', status: 'in-progress', hoursSpent: 90 }
      ]
    },
    {
      id: 8,
      name: 'Hannah',
      department: 'HR',
      salary: 62000,
      performance: [3, 3, 4, 3],
      projects: [
        { projectId: 'P801', status: 'completed', hoursSpent: 80 },
        { projectId: 'P802', status: 'in-progress', hoursSpent: 50 }
      ]
    },
    {
      id: 9,
      name: 'Irene',
      department: 'Marketing',
      salary: 78000,
      performance: [4, 5, 5, 4],
      projects: [
        { projectId: 'P901', status: 'completed', hoursSpent: 140 },
        { projectId: 'P902', status: 'completed', hoursSpent: 160 }
      ]
    },
    {
      id: 10,
      name: 'Jack',
      department: 'Sales',
      salary: 72000,
      performance: [4, 4, 3, 4],
      projects: [
        { projectId: 'P1001', status: 'completed', hoursSpent: 110 },
        { projectId: 'P1002', status: 'in-progress', hoursSpent: 70 }
      ]
    },
    {
      id: 11,
      name: 'Karen',
      department: 'Finance',
      salary: 85000,
      performance: [4, 4, 4, 5],
      projects: [
        { projectId: 'P1101', status: 'completed', hoursSpent: 120 },
        { projectId: 'P1102', status: 'completed', hoursSpent: 140 }
      ]
    },
    {
      id: 12,
      name: 'Liam',
      department: 'Engineering',
      salary: 93000,
      performance: [5, 5, 4, 5],
      projects: [
        { projectId: 'P1201', status: 'completed', hoursSpent: 210 },
        { projectId: 'P1202', status: 'in-progress', hoursSpent: 100 }
      ]
    }
  ];
  let avaragePerformances = employees.map((ajiltan) => {
    let sum = 0;
    ajiltan.performance.map((onoo) => {
      sum += onoo;
    });
    return {
      name: ajiltan.name,
      performance: sum / ajiltan.performance.length,
    };
  });

  console.log("avaragePerformances", avaragePerformances);

  let goodPerformances = avaragePerformances.filter((ajiltan) => {
    return ajiltan.performance >= 4.5;
  });
  let onlyNames = goodPerformances.map((ajiltan) => {
    return ajiltan.name;
  });
  console.log("Good performance 4.5", onlyNames);