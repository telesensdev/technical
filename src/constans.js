export const dict_status = {
    'A': {
        name: 'Активный',
        color: '#4faf50'
    },
    'N': {
        name: 'Не активный',
        color: '#f44336'
    }
};

export const reserv_status = {
    'S': {
        name: 'SUBMIT',
        color: '#4faf50'
    },
    'I': {
        name: 'INT',
        color: '#0043ff'
    }
};

export const resource_category = {
    'PLATINUM': {
        name: 'Платиновый',
        color: '#a8a7a5'
    },
    'GOLD': {
        name: 'Золотой',
        color: '#d4af37'
    },
    'SILVER': {
        name: 'Серебряный',
        color: '#c0c0c0'
    },
    'BRONZE': {
        name: 'Бронзовый',
        color: '#cd7f32'
    },
    'NONE': {
        name: 'Без категории',
        color: '#0aa08e'
    },
    'NAN': {
        name: 'Не номер',
        color: '#0aa08e'
    }
};

export const resource_status = {
    'X': {
        name: 'no data',
        color: '#989898'
    },
    'U': {
        name: 'Используется',
        color: '#85c6de'
    },
    'I': {
        name: 'in progress',
        color: '#4faf50'
    },
    'D': {
        name: 'in progress',
        color: '#4faf50'
    },
    'F': {
        name: 'Свободен',
        color: '#3466de'
    },
};

export const resource_type = {
    'SMS': {
        name: 'SMS',
        color: '#4faf50'
    },
    'SMS_FW': {
        name: 'SMS_FW',
        color: '#4faf50'
    },
    'IVR': {
        name: 'IVR',
        color: '#0043ff'
    },
    'USSD': {
        name: 'USSD',
        color: '#0043ff'
    },
    'ALPHA': {
        name: 'ALPHA',
        color: '#0043ff'
    },
    'BSID': {
        name: 'BSID',
        color: '#dd43ff'
    },
    'FAKE': {
        name: 'FAKE',
        color: '#fa0000'
    },
};

export const unit_type = {
    '10SEC': {
        name: '10 секунд'
    },
    'FACT': {
        name: 'Факт'
    },
    'MIN': {
        name: 'Минута'
    },
    'SEC': {
        name: 'Секунда'
    }
};

export const job_status = {
    'N': {
        name: 'К выполнению',
        color: '#85c6de',
        actions: [
            {
                name: 'К выполнению',
                to: 'N'
            },
            {
                name: 'В процессе',
                to: 'P'
            },
            {
                name: 'Готово',
                to: 'R'
            },
            {
                name: 'Ошибка',
                to: 'E'
            },
        ]
    },
    'P': {
        name: 'В процессе',
        color: '#3466de',
        actions: [
            {
                name: 'К выполнению',
                to: 'N'
            },
            {
                name: 'В процессе',
                to: 'P'
            },
            {
                name: 'Готово',
                to: 'R'
            },
            {
                name: 'Ошибка',
                to: 'E'
            },
        ]
    },
    'R': {
        name: 'Выполнен',
        color: '#4caf50',
        actions: [
            {
                name: 'К выполнению',
                to: 'N'
            },
            {
                name: 'В процессе',
                to: 'P'
            },
            {
                name: 'Готово',
                to: 'R'
            },
            {
                name: 'Ошибка',
                to: 'E'
            },
        ]
    },
    'E': {
        name: 'Ошибка',
        color: '#ff9800'
    },
    'K': {
        name: 'Для отмены',
        color: '#FF642A'
    },
    'C': {
        name: 'Отменен',
        color: '#f44336'
    },
};

export const task_status = {
    'N': {
        name: 'Формируется',
        color: '#999',
    },
    'P': {
        name: 'Для исполнения',
        color: '#85c6de',
    },
    'W': {
        name: 'В работе',
        color: '#3466de',
    },
    'I': {
        name: 'Исполняется',
        color: '#3466de',
    },
    'R': {
        name: 'Выполнен',
        color: '#4caf50',
    },
    'E': {
        name: 'Ошибка',
        color: '#ff9800'
    },
    'K': {
        name: 'Для отмены',
        color: '#FF642A'
    },
    'C': {
        name: 'Отменен',
        color: '#f44336'
    },
};

export const job_operation = {
    'ADD': {
        name: 'Добавить',
        icon: 'add',
        color: '#4caf50'
    },
    'DEL': {
        name: 'Удалить',
        icon: 'delete_forever',
        color: '#f44336'
    },
    'CNG': {
        name: 'Изменить',
        icon: 'edit',
        color: '#ff9800'
    },
};

export const order_status = {
    'F': {
        name: 'Формируется',
        color: '#999',
        progress: 1,
        actions: [
            {
                name: 'На ревью',
                to: 'P'
            },
            {
                name: 'На выполнение',
                to: 'W'
            },
        ]
    },
    'P': {
        name: 'Ревью',
        color: '#999',
        progress: 2,
        actions: [
            {
                name: 'Вернуть',
                to: 'F'
            },
            {
                name: 'На выполнение',
                to: 'W'
            },
        ]
    },
    'W': {
        name: 'Для исполнения',
        color: '#85c6de',
        progress: 3,
        actions: [
            {
                name: 'Вернуть',
                to: 'F'
            }
        ]
    },
    'I': {
        name: 'Исполняется',
        color: '#3466de',
        progress: 4
    },
    'E': {
        name: 'Ошибка',
        color: '#f44336',
        progress: 5
    },
    'C': {
        name: 'Отменена',
        color: '#f44336',
        progress: 5
    },
    'H': {
        name: 'Выполнена частично',
        color: '#ff9800',
        progress: 5
    },
    'R': {
        name: 'Завершена',
        color: '#4caf50',
        progress: 5
    },
};

export const task_operation = {
    'ADD': {
        name: 'Подключить',
        icon: 'add',
        color: '#4caf50'
    },
    'DEL': {
        name: 'Отключить',
        icon: 'delete_forever',
        color: '#f44336'
    },
    'CNG': {
        name: 'Изменить',
        icon: 'edit',
        color: '#ff9800'
    },
    'HND': {
        name: 'Передать',
        icon: 'edit',
        color: '#85c6de'
    },
};

export const job_filter_status = [
    {
        id: 1,
        name: 'Все',
        statuses: false
    },
    {
        id: 2,
        name: 'Для обработки',
        statuses: ['N', 'P'],
        start: true,
    },
    {
        id: 3,
        name: 'Ошибка',
        statuses: ['E']
    },
    {
        id: 4,
        name: 'Готово',
        statuses: ['R']
    },
];

export const log_type = {
    'info': {
        name: 'Info',
        color: '#4caf50'
    },
    'error': {
        name: 'Error',
        color: '#f44336'
    },
    'warn': {
        name: 'Warn',
        color: '#ff9800'
    },
    'http': {
        name: 'Http',
        color: '#AFAFFF'
    },
    'verbose': {
        name: 'Verbose',
        color: '#ff7b9a'
    },
    'debug': {
        name: 'Debug',
        color: '#8b0000'
    },
    'silly': {
        name: 'Silly',
        color: '#e7adaf'
    },
};

export const date_transform = (date) => {
    if (!date) return;

    const dateFormat = new Date(date);

    const visualNumDate = (item) => item < 10 ? '0' + item : item;

    const curr_day = visualNumDate(dateFormat.getDate());
    const curr_month = visualNumDate(dateFormat.getMonth() + 1);
    const curr_year = visualNumDate(dateFormat.getFullYear());

    return `${curr_day}.${curr_month}.${curr_year}`;
};

export const time_transform = (date) => {
    if (!date) return;

    const dateFormat = new Date(date);

    const visualNumTime = (item) => item < 10 ? '0' + item : item;

    const curr_hour = visualNumTime(dateFormat.getHours());
    const curr_minutes = visualNumTime(dateFormat.getMinutes());

    return `${curr_hour}:${curr_minutes}`;
};

export const date_transform_api = (date) => {
    if (!date) return null;

    try {
        const visualNumDate = (item) => item < 10 ? '0' + item : item;

        const curr_day = visualNumDate(date.getDate());
        const curr_month = visualNumDate(date.getMonth() + 1);
        const curr_year = visualNumDate(date.getFullYear());

        return `${ curr_year }-${ curr_month }-${ curr_day }`;
    } catch (e) {
        return '';
    }
};