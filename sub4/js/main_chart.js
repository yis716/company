const cht1 = document.getElementById('myChart1');
const cht2 = document.getElementById('myChart2');
const cht3 = document.getElementById('myChart3');
const cht4 = document.getElementById('myChart4');

const chart1 = new Chart(cht1, {
    type: 'bar',//차트 종류
    data: {
        labels: ['2021', '2022', '2023'],
        datasets: [{
            label: '매출액',
            data: [95172, 110319, 116125],
            backgroundColor: [
                'rgba(245, 131, 27, 0.2)', // labels[0]
                'rgba(153, 204, 0, 0.2)', // labels[1]
                'rgba(3, 122, 254, 0.2)'  // labels[2]
            ],
            borderColor: [
                'rgb(245, 131, 27)', // labels[0]
                'rgb(153, 204, 0)', // labels[1]
                'rgb(3, 122, 254)'  // labels[2]
            ],
            borderWidth: [
                5
            ],
            borderRadius: [
                10
            ],
            maxBarThickness: [
                150 // 최대 bar의 두께 설정
            ]
        },
        ]
    },
    options: {
        scales: {
            y: {
                grid: { // 축에 대한 격자선
                    display: false, // grid 활성화 (기본값 true)
                },
                beginAtZero: true //0부터 시작
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            // labels: {
            //     font: {
            //         size: 26
            //     },
            // }    
        }
        // legend: {
        //     labels: {
        //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
        //         fontColor: 'red',
        //         fontFamily: "'Noto Sans KR'",
        //         fontSize: 40
        //     }
        // }
    },
});

const chart2 = new Chart(cht2, {
    type: 'bar',//차트 종류
    data: {
        labels: ['2021', '2022', '2023'],
        datasets: [{
            label: '매출액',
            data: [2925, 3602, 3940],
            backgroundColor: [
                'rgba(245, 131, 27, 0.2)', // labels[0]
                'rgba(153, 204, 0, 0.2)', // labels[1]
                'rgba(3, 122, 254, 0.2)'  // labels[2]
            ],
            borderColor: [
                'rgb(245, 131, 27)', // labels[0]
                'rgb(153, 204, 0)', // labels[1]
                'rgb(3, 122, 254)'  // labels[2]
            ],
            borderWidth: [
                5
            ],
            borderRadius: [
                10
            ],
            maxBarThickness: [
                150 // 최대 bar의 두께 설정
            ]
        },
        ]
    },
    options: {
        scales: {
            y: {
                grid: { // 축에 대한 격자선
                    display: false, // grid 활성화 (기본값 true)
                },
                beginAtZero: true //0부터 시작
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            // labels: {
            //     font: {
            //         size: 26
            //     },
            // }    
        }
        // legend: {
        //     labels: {
        //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
        //         fontColor: 'red',
        //         fontFamily: "'Noto Sans KR'",
        //         fontSize: 40
        //     }
        // }
    },
});

const chart3 = new Chart(cht3, {
    type: 'bar',//차트 종류
    data: {
        labels: ['2021', '2022', '2023'],
        datasets: [{
            label: '매출액',
            data: [8013, 476, 221],
            backgroundColor: [
                'rgba(245, 131, 27, 0.2)', // labels[0]
                'rgba(153, 204, 0, 0.2)', // labels[1]
                'rgba(3, 122, 254, 0.2)'  // labels[2]
            ],
            borderColor: [
                'rgb(245, 131, 27)', // labels[0]
                'rgb(153, 204, 0)', // labels[1]
                'rgb(3, 122, 254)'  // labels[2]
            ],
            borderWidth: [
                5
            ],
            borderRadius: [
                10
            ],
            maxBarThickness: [
                150 // 최대 bar의 두께 설정
            ]
        },
        ]
    },
    options: {
        scales: {
            y: {
                grid: { // 축에 대한 격자선
                    display: false, // grid 활성화 (기본값 true)
                },
                beginAtZero: true //0부터 시작
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            // labels: {
            //     font: {
            //         size: 26
            //     },
            // }    
        }
        // legend: {
        //     labels: {
        //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
        //         fontColor: 'red',
        //         fontFamily: "'Noto Sans KR'",
        //         fontSize: 40
        //     }
        // }
    },
});
// legend: {
//     labels: {
//         font: {
//             // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
//             fontColor: 'red',
//                 fontFamily: "'Noto Sans KR'",
//                     fontSize: 40
//         }
//     }
// }
const chart4 = new Chart(cht4, {
    type: 'bar',//차트 종류
    data: {
        labels: ['2021', '2022', '2023'],
        datasets: [{
            label: '매출액',
            data: [94560, 98324, 100420],
            backgroundColor: [
                'rgba(245, 131, 27, 0.2)', // labels[0]
                'rgba(153, 204, 0, 0.2)', // labels[1]
                'rgba(3, 122, 254, 0.2)'  // labels[2]
            ],
            borderColor: [
                'rgb(245, 131, 27)', // labels[0]
                'rgb(153, 204, 0)', // labels[1]
                'rgb(3, 122, 254)'  // labels[2]
            ],
            borderWidth: [
                5
            ],
            borderRadius: [
                10
            ],
            maxBarThickness: [
                150 // 최대 bar의 두께 설정
            ]
        },
        ]
    },
    options: {
        scales: {
            y: {
                grid: { // 축에 대한 격자선
                    display: false, // grid 활성화 (기본값 true)
                },
                beginAtZero: true //0부터 시작
            }
        },
        plugins: {
            legend: {
                display: false, 
            },
            // labels: {
            //     font: {
            //         size: 26
            //     },
            // }    
        }
        // legend: {
        //     labels: {
        //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
        //         fontColor: 'red',
        //         fontFamily: "'Noto Sans KR'",
        //         fontSize: 40
        //     }
        // }
    },
});
