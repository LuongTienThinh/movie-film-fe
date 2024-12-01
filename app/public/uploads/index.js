const axios = require('axios');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

async function downloadImage(imageUrl, savePath) {
    try {
        // Gửi request tải hình ảnh
        const response = await axios({
            url: imageUrl,
            method: 'GET',
            responseType: 'stream',
        });

        // Lưu file vật lý
        const writer = fs.createWriteStream(savePath);
        response.data.pipe(writer);

        // Đảm bảo việc ghi file hoàn tất
        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve(`Hình ảnh đã được lưu vào: ${savePath}`));
            writer.on('error', reject);
        });
    } catch (error) {
        console.error('Lỗi khi tải hình ảnh:', error.message);
    }
}

function createFolder(folderName) {
    const folderPath = path.join(__dirname, folderName); // Đường dẫn thư mục

    // Kiểm tra xem thư mục đã tồn tại chưa
    if (!fs.existsSync(folderPath)) {
        fs.mkdir(folderPath, { recursive: true }, (err) => {
            if (err) {
                console.error('Lỗi khi tạo thư mục:', err);
                return;
            }
            console.log('Thư mục đã được tạo:', folderPath);
        });
    } else {
        console.log('Thư mục đã tồn tại:', folderPath);
    }

    return folderPath;
}

function downloadImagesFromURL(listImagesURL) {
    let time = 0;

    Object.keys(listImagesURL).forEach(key => {
        const folderPath = createFolder(key);

        listImagesURL[key].forEach(imageUrl => {
            const savePath = path.resolve(folderPath, imageUrl.split('/').pop());

            setTimeout(() => {
                downloadImage(imageUrl, savePath)
                    .then(console.log)
                    .catch(console.error);
            }, ++time * 1000);
        })
    });

    setTimeout(() => {
        console.log("end");
    }, ++time * 1000);
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ltthinh2001120422_movie'
});

function getTableFilm(connection) {
    connection.query('SELECT * FROM films', (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn: ' + err.stack);
            return;
        }
        
        const listImagesURL = {};
        listImagesURL.thumbnail = results.map((e) => e.thumbnail_url);
        listImagesURL.poster = results.map((e) => e.poster_url);

        downloadImagesFromURL(listImagesURL);
    });
}

function connectDB(connection) {
    connection.connect((err) => {
        if (err) {
            console.error('Lỗi kết nối: ' + err.stack);
            return;
        }
        console.log('Đã kết nối với cơ sở dữ liệu với ID: ' + connection.threadId);

        getTableFilm(connection);
    });
}

connectDB(connection);
