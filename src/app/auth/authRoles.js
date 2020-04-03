/**
 * Authorization Roles
 */

export const allRoles = {
    T_LIMITED_VIEW: 'T_LIMITED_VIEW',
    T_TECH_VIEW: 'T_TECH_VIEW',
    T_COMMERC_VIEW: 'T_COMMERC_VIEW',
    T_HISTORY_VIEW: 'T_HISTORY_VIEW',
    T_RESERVE_VIEW: 'T_RESERVE_VIEW',
    T_REQUEST_VIEW: 'T_REQUEST_VIEW',
    T_ADMIN_VIEW: 'T_ADMIN_VIEW',
    T_REPORT: 'T_REPORT',
    T_RESERVE_EDIT: 'T_RESERVE_EDIT',
    T_REQUEST_EDIT: 'T_REQUEST_EDIT',
    T_WRK_RES_EDIT: 'T_WRK_RES_EDIT',
    T_TECH_EDIT: 'T_TECH_EDIT',
    T_COMMERC_EDIT: 'T_COMMERC_EDIT',
    T_ADMIN_EDIT: 'T_ADMIN_EDIT',
    EXEC_BSID: 'EXEC_BSID',
    EXEC_CORE: 'EXEC_CORE',
    EXEC_SMSC: 'EXEC_SMSC',
    EXEC_TCPM: 'EXEC_TCPM',
};

const admin = [
    allRoles.T_LIMITED_VIEW,
    allRoles.T_HISTORY_VIEW,
    allRoles.T_RESERVE_VIEW,
    allRoles.T_REQUEST_VIEW,
    allRoles.T_REPORT,
    allRoles.T_TECH_EDIT,
    allRoles.T_COMMERC_EDIT,
    allRoles.T_ADMIN_EDIT
];

const executor = [
    allRoles.EXEC_BSID,
    allRoles.EXEC_CORE,
    allRoles.EXEC_SMSC,
    allRoles.EXEC_TCPM,
];

const executor_commerc = [
    allRoles.T_LIMITED_VIEW,
    allRoles.T_TECH_VIEW,
    allRoles.T_COMMERC_VIEW,
    allRoles.T_HISTORY_VIEW,
    allRoles.T_RESERVE_VIEW,
    allRoles.T_REQUEST_VIEW,
    allRoles.T_WRK_RES_EDIT,
];

const executor_tech = [
    allRoles.T_LIMITED_VIEW,
    allRoles.T_TECH_VIEW,
    allRoles.T_HISTORY_VIEW,
    allRoles.T_RESERVE_VIEW,
    allRoles.T_REQUEST_VIEW,
    allRoles.T_WRK_RES_EDIT,
];

const order_manager = [
    allRoles.T_LIMITED_VIEW,
    allRoles.T_HISTORY_VIEW,
    allRoles.T_RESERVE_EDIT,
    allRoles.T_REQUEST_EDIT,
    allRoles.T_WRK_RES_EDIT,
    allRoles.T_TECH_EDIT,
    allRoles.T_COMMERC_EDIT,
    allRoles.T_ADMIN_EDIT,
];

const authRoles = {
    allRoles,
    groups: {
        admin,
        executor,
        order_manager,
        executor_tech,
        executor_commerc,
        user: [
            ...Object.keys(allRoles)
        ],
        onlyGuest: []
    },
};

export default authRoles;
