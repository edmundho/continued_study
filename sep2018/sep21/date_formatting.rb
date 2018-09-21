def reformatDate(dates)
  # hash of month abbreviations to month numbers as strings
  months = {
    "Jan" => "01",
    "Feb" => "02",
    "Mar" => "03",
    "Apr" => "04",
    "May" => "05",
    "Jun" => "06",
    "Jul" => "07",
    "Aug" => "08",
    "Sep" => "09",
    "Oct" => "10",
    "Nov" => "11",
    "Dec" => "12"
    }
  
  result = []
  
  dates.each_with_index do |date, i|

    # split the date string into an array
    array = date.split(' ')
    
    # add 0 if day is before the 10th
    day = array[0][0...-2]
    if day.to_i < 10
      day = "0" + day
    end
  
    # construct reformatted date & push into result array
    new_date = "#{array[2]}-#{months[array[1]]}-#{day}"
    result << new_date
  end

  result
end
