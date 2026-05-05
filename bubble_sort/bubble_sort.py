def bubble_sort(arr):
    """
    氣泡排序法 (Bubble Sort) 的 Python 實作
    
    參數:
        arr (list): 想要排序的數列
    
    回傳:
        list: 排序後的數列
    """
    n = len(arr)
    # 遍歷所有陣列元素
    for i in range(n):
        # 最後 i 個元素已經排好序了，所以不需要再檢查
        for j in range(0, n - i - 1):
            # 如果目前元素大於下一個元素，則交換它們
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# 測試程式碼
if __name__ == "__main__":
    sample_list = [64, 34, 25, 12, 22, 11, 90]
    print(f"原始數列: {sample_list}")
    
    sorted_list = bubble_sort(sample_list.copy())
    print(f"排序後數列: {sorted_list}")
