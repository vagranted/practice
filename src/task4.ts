type Address = {
    city: string;
    street: string;
    house: string;
}

type Person = {
    lastName: string;
    firstName: string;
}

type ProductsOrder = {
    count: number;
    product: {
        name: string;
    };
}

interface GlobalData {
    address: Address;
    person: Person;
    productsOrder: ProductsOrder;
}

async function fetchData(url: string): Promise<void> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data: GlobalData = await response.json();
        const { city, street, house } = data.address;
        const { lastName, firstName } = data.person;
        const { count, product } = data.productsOrder;

        console.log(`Город: ${city} Улица: ${street} Дом: ${house}`);
        console.log(`Фамилия: ${lastName} Имя: ${firstName} купил ${count} штук товаров ${product.name}`);
    } catch (error: any) {
        console.error(`Произошла ошибка: ${error.message}`);
    }
}

const apiUrl = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json';
fetchData(apiUrl);