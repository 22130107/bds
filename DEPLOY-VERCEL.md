# Vercel deployment instructions

1. Đảm bảo bạn đã đăng nhập Vercel CLI:
   ```bash
   npx vercel login
   ```
2. Deploy dự án:
   ```bash
   npx vercel --prod
   ```

- File `vercel.json` đã được cấu hình cho Next.js app directory.
- Nếu cần cấu hình thêm biến môi trường, hãy thêm vào dashboard Vercel hoặc file `.env` (không commit file này lên git).

Tham khảo thêm: https://vercel.com/docs/deploy-projects
