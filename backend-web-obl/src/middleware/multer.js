const multer = require('multer');
const fs = require('fs');
const dbPool = require('../config/database');
const path = require('path');
const buffer = require('buffer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/document');
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const originalname = file.originalname;
        cb(null, `${timestamp}-${originalname}`);
    }
});

const upload = multer({ storage : storage });

const uploadFile = async (req, res) => {
    const file = req.file;
        if (!file) {
        res.status(400).send("File not found");
        return;
        }
    const fileName = file.filename;
    const fileType = file.mimetype;

    try {
        const { SPPH_BA_Visit, P0, P1, Quotation, Surat_Penunjukan, Kontrak_KB, KL_WO, Mitra_OBL, Dokumen_Pendukung } = req.body;
    
        const fileData = buffer.from(file.buffer).toString('base64');
    
        const db = await dbPool.getConnection();

    const sql = `INSERT INTO document (
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
        '${body.SPPH_BA_Visit}',
        '${body.P0}',
        '${body.P1}',
        '${body.Quotation}',
        '${body.Surat_Penunjukan}',
        '${body.Kontrak_KB}',
        '${body.KL_WO}',
        '${body.Mitra_OBL}',
        '${body.Dokumen_Pendukung}'
    )`

    const result = await db.query(sql, [SPPH_BA_Visit, P0, P1, Quotation, Surat_Penunjukan, Kontrak_KB, KL_WO, Mitra_OBL, Dokumen_Pendukung, fileData]); // Gunakan array untuk prepared statement

    await db.release(); // Kembalikan koneksi ke pool

    if (result.affectedRows > 0) {
        res.status(200).send({
        message: "File uploaded successfully",
        file: fileName, // Ganti dengan path atau URL file sesuai storage
        file_type: fileType,
    });
    } else {
        res.status(500).send("Error saving data to database");
    }
} catch (error) {
    console.error(error);
    res.status(500).send(error.message);
}
};

module.exports = uploadFile;