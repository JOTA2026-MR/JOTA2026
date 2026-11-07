
module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "طريقة الطلب غير مسموحة"
    });
  }

  const { player, code } = req.body || {};
  const accessCode = process.env.JOTA_ACCESS_CODE;

  if (!accessCode) {
    return res.status(503).json({
      message: "السيرفر يحتاج إعداد رمز التفعيل"
    });
  }

  if (!player || code !== accessCode) {
    return res.status(401).json({
      message: "بيانات غير صحيحة"
    });
  }

  return res.status(200).json({
    success: true,
    message: "تم تسجيل الدخول"
  });
};
