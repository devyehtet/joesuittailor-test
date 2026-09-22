# Joe Suit Tailor Clone

VS Code မှာ တိုက်ရိုက်ဖွင့်ပြီး ပြင်ဆင်နိုင်တဲ့ static website project ဖြစ်ပါတယ်။ Node.js ရှိရုံနဲ့ run နိုင်ပြီး package ထပ်ထည့်စရာမလိုပါဘူး။

## VS Code မှာဖွင့်ရန်

1. ZIP file ကို Extract လုပ်ပါ။
2. VS Code ကိုဖွင့်ပြီး **File → Open Folder** ကိုနှိပ်ပါ။
3. Extract လုပ်ထားတဲ့ `Joe_Suit_Tailor_VSCode` folder ကိုရွေးပါ။
4. VS Code Terminal မှာ အောက်ပါ command ကို run ပါ။

```bash
npm run dev
```

5. Browser မှာ [http://localhost:4173](http://localhost:4173) ကိုဖွင့်ပါ။

VS Code ရဲ့ **Run Task** ထဲက `Start Joe Suit Website` ကိုရွေးပြီးလည်း run နိုင်ပါတယ်။

## ပြင်ဆင်ရမည့် Files

- `dist/index.html` — Header, menu, footer နဲ့ website structure
- `dist/styles.css` — Design, colors, fonts နဲ့ responsive layout
- `dist/app.js` — Page content, product data, routes နဲ့ interactions
- `dist/assets/` — Website images

## Available Pages

- `/`
- `/men/suits`, `/men/shirts`, `/men/tuxedos`, `/men/jackets`
- `/women/suits`, `/women/blouses`, `/women/dresses`, `/women/coats`
- `/custom-made`, `/wedding`, `/fabrics`, `/packages`
- `/gallery`, `/journal`, `/measurements`, `/faq`, `/about`, `/contact`

## Important

Contact form က demo interaction ဖြစ်ပြီး database ဆီ မပို့ပါဘူး။ WhatsApp နဲ့ phone links က live ဖြစ်ပါတယ်။ Production မှာ form submissions သိမ်းချင်ရင် backend သို့မဟုတ် form service တစ်ခု ချိတ်ဆက်ရန်လိုပါတယ်။
# joesuittailor-test
