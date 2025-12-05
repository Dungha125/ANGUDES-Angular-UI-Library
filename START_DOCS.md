# Hướng dẫn chạy Documentation Site

## ⚠️ Lưu ý quan trọng

Nếu port 4200 đã được sử dụng, server sẽ tự động chuyển sang port khác (4201, 4202, ...)

## Các bước chạy:

### 1. Build library trước (nếu chưa build)
```bash
ng build angudes
```

### 2. Chạy documentation site
```bash
ng serve docs
```

Hoặc sử dụng port cụ thể:
```bash
ng serve docs --port 4201
```

### 3. Mở trình duyệt
- Kiểm tra terminal để xem port nào đang được sử dụng
- Thường là: `http://localhost:4200` hoặc `http://localhost:4201`
- Server sẽ tự động mở trình duyệt khi compile xong

## Nếu không thấy gì hiển thị:

1. **Kiểm tra terminal** - Xem có lỗi compile không
2. **Kiểm tra console trình duyệt** (F12) - Xem có lỗi JavaScript không
3. **Kiểm tra Network tab** - Xem các file có load được không
4. **Thử build lại**:
   ```bash
   ng build angudes
   ng serve docs
   ```

## Troubleshooting

### Lỗi "Cannot find module 'angudes'"
- Đảm bảo đã build library: `ng build angudes`
- Kiểm tra file `tsconfig.json` có path mapping đúng không

### Port đã được sử dụng
- Dừng process cũ: `Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force`
- Hoặc dùng port khác: `ng serve docs --port 4201`

### Lỗi compile
- Xóa cache: `rm -rf node_modules/.cache` (hoặc xóa thư mục .angular)
- Rebuild: `ng build angudes` rồi `ng serve docs`

