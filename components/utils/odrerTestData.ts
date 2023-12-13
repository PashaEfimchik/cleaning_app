const orderTestData = [
    {
        id: 1,
        date: "2023-09-20",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-20",
                time: "10:00",
                address: "Address 01",
                secondAddress: "Address second 01",
                postalCode: "12345",
                city: "City 01",
                province: "Province 01",
                serviceType: {value: "Basic", price: 100},
                extraServices: [],
                howFast: { value: "x1", price: 50},
                subTotalPrice: 220,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-20", price: 266},
            },
    },
    {
        id: 2,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 3,
        date: "2023-09-24",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-24",
                time: "12:00",
                address: "Address 03",
                secondAddress: "Address second 03",
                postalCode: "1244555",
                city: "City 03",
                province: "Province 03",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 03", price: 30},
                    { value: "Extra 06", price: 55}
                ],
                howFast: { value: "x3", price: 150},
                subTotalPrice: 100,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-24", price: 423},
            },
    },
    {
        id: 4,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 5,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 6,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 7,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 8,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 9,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 10,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 11,
        date: "2023-09-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-09-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-09-22", price: 332},
            },
    },
    {
        id: 12,
        date: "2023-11-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-11-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-11-22", price: 332},
            },
    },
    {
        id: 13,
        date: "2023-11-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-11-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-11-22", price: 332},
            },
    },
    {
        id: 14,
        date: "2023-11-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-11-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-11-22", price: 332},
            },
    },
    {
        id: 15,
        date: "2023-12-22",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-12-22",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-12-22", price: 332},
            },
    },
    {
        id: 16,
        date: "2023-12-16",
        serviceType: "Basic",
        dataInfo:
            {
                date: "2023-12-16",
                time: "11:00",
                address: "Address 02",
                secondAddress: "Address second 02",
                postalCode: "124444",
                city: "City 02",
                province: "Province 02",
                serviceType: {value: "Basic", price: 100},
                extraServices: [
                    { value: "Extra 01", price: 15},
                    { value: "Extra 04", price: 25},
                    { value: "Extra 05", price: 35}
                ],
                howFast: { value: "x2", price: 100},
                subTotalPrice: 200,
                iva: 0.21,
                paid: { status: "Paid", date: "2023-12-16", price: 332},
            },
    },
];

export default orderTestData;