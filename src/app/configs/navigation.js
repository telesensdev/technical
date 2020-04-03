import authRoles from '../auth/authRoles';

const navigation = [
    {
        'id': 'main',
        'title': 'Основное',
        'children': [
            {
                'id': 'home',
                'title': 'Home',
                'type': 'item',
                'icon': 'home',
                auth: authRoles.groups.user,
                'url': '/'
            },
            {
                'id': 'dashboard',
                'title': 'Dashboard',
                'type': 'item',
                'icon': 'dashboard',
                auth: [authRoles.allRoles.T_RESERVE_VIEW, authRoles.allRoles.T_RESERVE_EDIT],
                'url': '/dashboard'
            },
            {
                'id': 'orders',
                'title': 'Заявки',
                'type': 'item',
                'icon': 'list_alt',
                auth: [authRoles.allRoles.T_RESERVE_VIEW, authRoles.allRoles.T_RESERVE_EDIT],
                'url': '/orders'
            },
            {
                'id': 'jobs',
                'title': 'Jobs',
                'type': 'item',
                'icon': 'assignment',
                auth: authRoles.groups.executor,
                'url': '/jobs'
            },
            {
                'id': 'reserv',
                'title': 'Резерв',
                'type': 'item',
                'icon': 'table_chart',
                auth: [authRoles.allRoles.T_REQUEST_VIEW, authRoles.allRoles.T_REQUEST_EDIT],
                'url': '/reserv'
            },
            {
                'id': 'search',
                'title': 'Поиск',
                'type': 'item',
                'icon': 'search',
                auth: [
                    authRoles.allRoles.T_LIMITED_VIEW,
                    authRoles.allRoles.T_TECH_VIEW,
                    authRoles.allRoles.T_COMMERC_VIEW,
                    authRoles.allRoles.T_HISTORY_VIEW,
                ],
                'url': '/search'
            },
            {
                'id': 'reports',
                'title': 'Отчеты',
                'type': 'item',
                'icon': 'add_to_photos',
                auth: [authRoles.allRoles.T_REPORT,
                       authRoles.allRoles.T_TECH_EDIT,
                      ],
                'url': '/reports'
            },
        ]
    },
    {
        'id': 'directories',
        'title': 'Справочники',
        auth: [
            authRoles.allRoles.T_TECH_VIEW,
            authRoles.allRoles.T_TECH_EDIT,
            authRoles.allRoles.T_COMMERC_VIEW,
            authRoles.allRoles.T_COMMERC_EDIT,
        ],
        'children': [
            {
                'id': 'providers',
                'title': 'Контент-провайдеры',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_TECH_VIEW,
                    authRoles.allRoles.T_TECH_EDIT,
                ],
                'url': '/providers'
            },
            {
                'id': 'clients',
                'title': 'Конечные клиенты',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/clients'
            },
            {
                'id': 'regions',
                'title': 'Регионы',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_TECH_VIEW,
                    authRoles.allRoles.T_TECH_EDIT,
                ],
                'url': '/regions'
            },
            {
                'id': 'tariffs',
                'title': 'Тарифные сетки',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_COMMERC_VIEW,
                    authRoles.allRoles.T_COMMERC_EDIT,
                ],
                'url': '/tariffs'
            },
            {
                'id': 'number_categories',
                'title': 'Категории номеров',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_COMMERC_VIEW,
                    authRoles.allRoles.T_COMMERC_EDIT,
                ],
                'url': '/number_categories'
            },
            {
                'id': 'usage_tariff_plans',
                'title': 'Плата за использование',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_COMMERC_VIEW,
                    authRoles.allRoles.T_COMMERC_EDIT,
                ],
                'url': '/usage_tariff_plans'
            },
            {
                'id': 'discounts',
                'title': 'Скидки',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_COMMERC_VIEW,
                    authRoles.allRoles.T_COMMERC_EDIT,
                ],
                'url': '/discounts'
            },
        ]
    },
    {
        'id': 'admin',
        'title': 'Админ',
        auth: [
            authRoles.allRoles.T_ADMIN_VIEW,
            authRoles.allRoles.T_ADMIN_EDIT
        ],
        'children': [
            {
                'id': 'users',
                'title': 'Пользователи',
                'type': 'item',
                'icon': 'person',
                auth: [
                    authRoles.allRoles.T_ADMIN_VIEW,
                    authRoles.allRoles.T_ADMIN_EDIT
                ],
                'url': '/users'
            },
            {
                'id': 'audit',
                'title': 'Аудит действий',
                'type': 'item',
                'icon': 'crop_landscape',
                auth: [
                    authRoles.allRoles.T_ADMIN_VIEW,
                    authRoles.allRoles.T_ADMIN_EDIT
                ],
                'url': '/audit'
            },
            {
                'id': 'roles',
                'title': 'Роли',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_ADMIN_VIEW,
                    authRoles.allRoles.T_ADMIN_EDIT
                ],
                'url': '/roles'
            },
            {
                'id': 'jobmatix',
                'title': 'Исполнители работ',
                'type': 'item',
                'icon': 'border_clear',
                auth: [
                    authRoles.allRoles.T_COMMERC_VIEW,
                    authRoles.allRoles.T_COMMERC_EDIT,
                ],
                'url': '/jobmatrix'
            },

        ]
    },
];

export default navigation;
