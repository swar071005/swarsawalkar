import qrcode

portfolio_url = "https://YOUR_PORTFOLIO_LINK_HERE"

qr = qrcode.make(portfolio_url)
qr.save("Swar_Sawalkar_Eportfolio_QR.png")

print("QR Code generated successfully!")
