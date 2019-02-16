#!/usr/bin/env python3

import bz2
import glob
import gzip
import os
import os.path
import lzma as xz
import requests
import shutil
import sys
import zipfile


def file_endings(source_dir, ending):
    for f in glob.glob(os.path.join(source_dir, "*")):
        if f.endswith(ending):
            yield f


def compress_single_sets(source_dir):
    for f in file_endings(source_dir, ".json"):
        file_root = os.path.splitext(f)[0]

        # .ZIP
        zip_file_name = file_root + ".json.zip"
        zip_out = zipfile.ZipFile(zip_file_name, "w")
        zip_out.write(
            f, compress_type=zipfile.ZIP_DEFLATED, arcname=os.path.basename(f)
        )
        zip_out.close()

        # .GZ
        gz_file_name = file_root + ".json.gz"
        gz_file_path = os.path.join(source_dir, gz_file_name)
        with open(f, "rb") as f_in, gzip.open(gz_file_path, "wb") as f_out:
            f_out.writelines(f_in)

        # .BZ2
        bz_file_name = file_root + ".json.bz2"
        bz_file_path = os.path.join(source_dir, bz_file_name)
        with open(f, "rb") as f_in, open(bz_file_path, "wb") as f_out:
            f_out.write(bz2.compress(f_in.read()))

        # .XZ
        xz_file_name = file_root + ".json.xz"
        xz_file_path = os.path.join(source_dir, xz_file_name)
        with open(f, "rb") as f_in, open(xz_file_path, "wb") as f_out:
            f_out.write(xz.compress(f_in.read()))

        print("Compressed " + os.path.basename(f))


def get_all_set_names():
    data = requests.get("https://api.scryfall.com/sets/").json()["data"]
    return [x["code"].upper() for x in data]


def compress_all_set_files(source_dir):
    all_set_files_name = "AllSetFiles"

    # Make directory of stuff to compress
    os.makedirs(all_set_files_name)

    # Copy stuff to compress
    sets = set(get_all_set_names() + ["CON_"])
    for f in sets:
        try:
            shutil.copy(os.path.join(source_dir, f + ".json"), all_set_files_name)
        except FileNotFoundError:
            pass

    # Compress the archives
    shutil.make_archive(all_set_files_name, "bztar", all_set_files_name)
    shutil.make_archive(all_set_files_name, "gztar", all_set_files_name)
    shutil.make_archive(all_set_files_name, "xztar", all_set_files_name)
    shutil.make_archive(all_set_files_name, "zip", all_set_files_name)

    # Delete the copied folder
    shutil.rmtree(all_set_files_name, ignore_errors=True)

    print("Compressed " + all_set_files_name)


def main():
    # Setup into correct directory
    source_dir = os.path.join(os.getcwd(), sys.argv[1])
    os.chdir(source_dir)

    # Compress the system
    compress_all_set_files(".")
    compress_single_sets(".")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: " + sys.argv[0] + " <json_directory>")
        sys.exit()
    main()
