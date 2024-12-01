from PIL import Image
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

def compress_image(input_path, output_path, quality=85):
    """
    Nén hình ảnh bằng Pillow.
    
    Args:
        input_path (str): Đường dẫn đến hình ảnh gốc.
        output_path (str): Đường dẫn lưu hình ảnh đã nén.
        quality (int): Chất lượng hình ảnh (1-100, mặc định là 85).
    """
    try:
        # Mở hình ảnh
        image = Image.open(input_path)

        # Kiểm tra nếu hình ảnh không ở định dạng RGB thì chuyển đổi
        if image.mode in ("RGBA", "P"):  # RGBA là ảnh có alpha
            image = image.convert("RGB")

        # Lưu hình ảnh với chất lượng đã chỉ định
        image.save(output_path, "JPEG", optimize=True, quality=quality)

        print(f"Đã nén và lưu hình ảnh tại: {output_path}")
    except Exception as e:
        print(f"Lỗi khi nén hình ảnh: {e}")

def compress_all_images_in_folder(folder_path, output_folder):
    # Tạo thư mục output nếu chưa có
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Duyệt qua tất cả các tệp trong thư mục
    for filename in os.listdir(folder_path):
        input_path = os.path.join(folder_path, filename)

        # Kiểm tra xem tệp có phải là hình ảnh không
        if os.path.isfile(input_path) and filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            output_path = os.path.join(output_folder, filename)
            compress_image(input_path, output_path)

# Ví dụ sử dụng
input_path = os.path.join(current_dir, "thumbnails")
output_path = os.path.join(current_dir, "thumbnailss")

compress_all_images_in_folder(input_path, output_path)
