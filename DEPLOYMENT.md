# Hướng dẫn Triển khai Angudes Library

Hướng dẫn chi tiết để build, publish và triển khai thư viện Angudes.

## 📋 Mục lục

1. [Build Library](#build-library)
2. [Publish lên npm](#publish-lên-npm)
3. [Deploy Documentation](#deploy-documentation)
4. [Sử dụng trong dự án khác](#sử-dụng-trong-dự-án-khác)

---

## 🏗️ Build Library

### Bước 1: Build production

```bash
# Build library với production mode
npm run build:prod

# Hoặc build thông thường
npm run build
```

Output sẽ được tạo tại: `angudes/dist/`

### Bước 2: Kiểm tra build output

```bash
# Xem cấu trúc thư mục dist
ls -la angudes/dist/

# Cấu trúc mong đợi:
# dist/
#   ├── angudes/
#   │   ├── esm2022/
#   │   ├── fesm2022/
#   │   ├── lib/
#   │   └── package.json
#   └── package.json
```

---

## 📦 Publish lên npm

### Bước 1: Đăng nhập npm

```bash
# Đăng nhập vào npm
npm login

# Nhập:
# - Username: (tên tài khoản npm của bạn)
# - Password: (mật khẩu)
# - Email: (email đã đăng ký)
```

### Bước 2: Kiểm tra package.json

Đảm bảo `package.json` có đầy đủ thông tin:

```json
{
  "name": "angudes",
  "version": "1.0.0",
  "description": "Angular UI Component Library - A comprehensive collection of reusable UI components",
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/angudes.git"
  },
  "keywords": [
    "angular",
    "ui",
    "components",
    "library",
    "angudes"
  ]
}
```

### Bước 3: Tăng version (nếu cần)

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch

# Minor version (1.0.0 -> 1.1.0)
npm version minor

# Major version (1.0.0 -> 2.0.0)
npm version major
```

### Bước 4: Build và Publish

```bash
# Build production
npm run build:prod

# Di chuyển vào thư mục dist
cd angudes/dist

# Publish lên npm
npm publish

# Hoặc publish với tag beta
npm publish --tag beta
```

### Bước 5: Kiểm tra trên npm

Truy cập: `https://www.npmjs.com/package/angudes`

---

## 🌐 Deploy Documentation

### Option 1: Deploy lên GitHub Pages

#### Bước 1: Cài đặt angular-cli-ghpages

```bash
npm install -g angular-cli-ghpages
```

#### Bước 2: Build docs

```bash
# Build docs với base-href
ng build docs --base-href /angudes/

# Hoặc nếu deploy vào subfolder
ng build docs --base-href /repository-name/
```

#### Bước 3: Deploy

```bash
# Deploy lên GitHub Pages
ngh --dir=dist/docs

# Hoặc với branch cụ thể
ngh --dir=dist/docs --branch=gh-pages
```

#### Bước 4: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Settings → Pages
3. Source: `gh-pages` branch
4. Save

URL sẽ là: `https://yourusername.github.io/angudes/`

---

### Option 2: Deploy lên Netlify

#### Bước 1: Build docs

```bash
ng build docs --configuration production
```

#### Bước 2: Deploy

**Cách 1: Drag & Drop**
1. Truy cập [Netlify](https://www.netlify.com/)
2. Đăng nhập/Đăng ký
3. Kéo thả thư mục `dist/docs` vào Netlify

**Cách 2: Netlify CLI**

```bash
# Cài đặt Netlify CLI
npm install -g netlify-cli

# Đăng nhập
netlify login

# Deploy
netlify deploy --prod --dir=dist/docs
```

**Cách 3: GitHub Integration**
1. Kết nối repository với Netlify
2. Build command: `npm run build:docs`
3. Publish directory: `dist/docs`

---

### Option 3: Deploy lên Vercel

#### Bước 1: Cài đặt Vercel CLI

```bash
npm install -g vercel
```

#### Bước 2: Deploy

```bash
# Build docs
ng build docs --configuration production

# Deploy
vercel --prod dist/docs
```

Hoặc kết nối GitHub repository trực tiếp trên [Vercel Dashboard](https://vercel.com/)

---

### Option 4: Deploy lên Firebase Hosting

#### Bước 1: Cài đặt Firebase CLI

```bash
npm install -g firebase-tools
```

#### Bước 2: Khởi tạo Firebase

```bash
firebase login
firebase init hosting
```

Chọn:
- Public directory: `dist/docs`
- Single-page app: `Yes`
- Overwrite index.html: `No`

#### Bước 3: Build và Deploy

```bash
# Build
ng build docs --configuration production

# Deploy
firebase deploy
```

---

## 💻 Sử dụng trong dự án khác

### Bước 1: Cài đặt package

```bash
npm install angudes
```

### Bước 2: Import module

Trong `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngudesModule } from 'angudes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngudesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Bước 3: Import styles (tùy chọn)

Trong `styles.scss`:

```scss
@import 'angudes/styles';
```

### Bước 4: Sử dụng components

Trong template:

```html
<agu-button [variant]="'primary'" [size]="'lg'">
  Click Me
</agu-button>

<agu-input placeholder="Enter text"></agu-input>

<agu-card>
  <agu-card-header>Title</agu-card-header>
  <agu-card-body>Content</agu-card-body>
</agu-card>
```

---

## 🔧 Scripts hữu ích

Thêm vào `package.json`:

```json
{
  "scripts": {
    "build": "ng build angudes",
    "build:prod": "ng build angudes --configuration production",
    "build:docs": "ng build docs --configuration production",
    "serve:docs": "ng serve docs",
    "test": "ng test angudes",
    "lint": "ng lint",
    "publish:patch": "npm version patch && npm run build:prod && cd angudes/dist && npm publish",
    "publish:minor": "npm version minor && npm run build:prod && cd angudes/dist && npm publish",
    "publish:major": "npm version major && npm run build:prod && cd angudes/dist && npm publish"
  }
}
```

---

## 📝 Checklist trước khi publish

- [ ] Đã test tất cả components
- [ ] Đã build thành công
- [ ] Đã cập nhật version trong package.json
- [ ] Đã cập nhật CHANGELOG.md
- [ ] Đã kiểm tra README.md
- [ ] Đã test install package trong dự án mới
- [ ] Đã đăng nhập npm (`npm login`)
- [ ] Đã kiểm tra tên package không bị trùng

---

## 🐛 Troubleshooting

### Lỗi: Package name đã tồn tại

Giải pháp: Đổi tên package trong `package.json` hoặc sử dụng scope:

```json
{
  "name": "@yourusername/angudes"
}
```

### Lỗi: Build failed

```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Angular cache
ng cache clean
```

### Lỗi: Publish failed - Authentication

```bash
# Kiểm tra đăng nhập
npm whoami

# Đăng nhập lại
npm login
```

---

## 📚 Tài liệu tham khảo

- [Angular Library Guide](https://angular.io/guide/creating-libraries)
- [ng-packagr Documentation](https://github.com/ng-packagr/ng-packagr)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Pages](https://pages.github.com/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)

---

## 🎉 Hoàn thành!

Sau khi hoàn thành các bước trên, bạn sẽ có:
- ✅ Library được publish lên npm
- ✅ Documentation được deploy online
- ✅ Có thể sử dụng trong các dự án Angular khác

Chúc bạn thành công! 🚀

