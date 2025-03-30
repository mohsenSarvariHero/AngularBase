useEffect(() => {
    setShowModal(true);
    // اضافه کردن رویداد کلیک به مستندات
    const handleClickOutside = (e) => {
      if (modalref.current && !modalref.current.contains(e.target)) {
        navigate("/");  // هدایت به صفحه Enter در صورت کلیک خارج از پاپ‌آپ
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navigate]);useEffect(() => {
      setShowModal(true);
      // اضافه کردن رویداد کلیک به مستندات
      const handleClickOutside = (e) => {
        if (modalref.current && !modalref.current.contains(e.target)) {
          navigate("/");  // هدایت به صفحه Enter در صورت کلیک خارج از پاپ‌آپ
        }
      };
  
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [navigate]);