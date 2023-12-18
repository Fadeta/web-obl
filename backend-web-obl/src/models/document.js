const dbPool = require ('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM document';
    return dbPool.execute(SQLQuery);
}

const createNewUsers = (body) => {
    const SQLQuery = `INSERT INTO document (
        OBL,
        AM,
        SPPH_BA_Visit,
        P0,
        P1,
        Quotation,
        Surat_Penunjukan,
        Kontrak_KB,
        KL_WO,
        Mitra_OBL,
        Dokumen_Pendukung
    ) VALUES (
        '${body.OBL}',
        '${body.AM}',
        '${body.SPPH_BA_Visit}',
        '${body.P0}',
        '${body.P1}',
        '${body.Quotation}',
        '${body.Surat_Penunjukan}',
        '${body.Kontrak_KB}',
        '${body.KL_WO}',
        '${body.Mitra_OBL}',
        '${body.Dokumen_Pendukung}'
    )`;
    return dbPool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const SQLQuery = `UPDATE document SET
                        OBL='${body.OBL}',
                        AM='${body.AM}',
                        SPPH_BA_Visit='${body.SPPH_BA_Visit}',
                        P0='${body.P0}',
                        P1='${body.P1}',
                        Quotation='${body.Quotation}',
                        Surat_Penunjukan='${body.Surat_Penunjukan}',
                        Kontrak_KB='${body.Kontrak_KB}',
                        KL_WO='${body.KL_WO}',
                        Mitra_OBL='${body.Mitra_OBL}',
                        Dokumen_Pendukung='${body.Dokumen_Pendukung}'
                        WHERE id =${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM document WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}