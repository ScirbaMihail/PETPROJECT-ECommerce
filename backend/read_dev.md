# Documentation for developers
## Services return formats
Tuple[bool, None | Dict[str, str], Dict[str, str]]
1. First element - status of service execution: True = success, False = Fail
2. Second element - data as dict or None if no data returned
3. Third element - response body